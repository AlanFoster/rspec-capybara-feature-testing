require 'feature_helper'

module Pages
  class ViewBlog
    include RSpec::Matchers
    include Capybara::DSL

    def has_loaded?
      self.has_selector? show_blog
    end

    def has_blog?(title:, text:)
      within show_blog do
        expect(page).to have_content title
        expect(page).to have_content text
      end
    end

    private

    def show_blog
      '.blog--show'
    end
  end
end
