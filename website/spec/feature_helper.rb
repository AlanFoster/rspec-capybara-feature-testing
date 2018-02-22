require 'rails_helper'
require 'table_print'
require 'capybara/rails'
require 'billy/capybara/rspec'
require 'capybara-screenshot/rspec'

def debug?
  ENV['DEBUG'] == 'true'
end

Capybara::Screenshot.register_driver(:webkit_billy) do |driver, path|
  driver.save_screenshot(path)
end

Capybara::Webkit.configure do |config|
  # Puffing billy will now receive _all_ requests
  config.allow_unknown_urls
  config.raise_javascript_errors = true
  config.debug = debug?
end

Billy.configure do |c|
  c.cache = false
  c.record_stub_requests = true
  c.record_requests = true
  c.non_whitelisted_requests_disabled = true
end

def driver
  driver_override = ENV['DRIVER']
  return :webkit_billy unless driver_override

  case driver_override
    when 'firefox'
      :selenium_billy
    when 'chrome'
      :selenium_chrome_billy
    when 'webkit'
      :webkit_billy
    else
      fail "Unsupported driver '#{driver_override}'"
  end
end

Capybara.default_driver = driver
Capybara.javascript_driver = driver

RSpec.configure do |config|
  config.after(:example, type: :feature) do
    next unless debug?

    puts "Requests received via Puffing Billy Proxy:"
    tp Billy.proxy.requests
  end
end
