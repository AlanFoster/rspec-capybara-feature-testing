require 'feature_helper'

module Components
  class BlogForm
    include RSpec::Matchers
    include Capybara::DSL

    def create(title:, text:)
      within blog_form do
        fill_in 'blog_title', with: title
        fill_in 'blog_text', with: text

        click_on 'Save Blog'
      end
    end

    private

    def blog_form
      find('.blog--new')
    end
  end
end
