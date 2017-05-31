require 'feature_helper'
require_relative '../components/blog_form'

module Pages
  class NewBlog
    include RSpec::Matchers
    include Capybara::DSL

    def visit_location
      visit '/blogs/new'
      expect(self).to have_loaded
    end

    def has_loaded?
      self.has_selector? 'h1', text: 'Create Blog'
    end

    def create(title:, text:)
      blog_form.new.create title: title,
                           text: text
    end

    def has_errors?(*errors)
      expect(self).to have_content("#{errors.count} errors stopped this form being submitted")

      errors.each do |error|
        expect(self).to have_error error
      end
    end

    def has_error?(error)
      has_selector? 'ul li', text: error
    end

    private

    def blog_form
      ::Components::BlogForm
    end
  end
end
