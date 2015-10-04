require 'rails_helper'
require 'capybara/rails'

def selenium?
  ENV['selenium'] == 'true'
end

if selenium?
  Capybara.default_driver = :selenium
  Capybara.javascript_driver = :selenium
end
