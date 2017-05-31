require 'feature_helper'
require_relative '../pages/new_blog'
require_relative '../pages/view_blog'

feature 'Blog management', type: :feature do
  let(:new_blog_page) { ::Pages::NewBlog.new }
  let(:view_blog_page) { ::Pages::ViewBlog.new }

  before :each do
    new_blog_page.visit_location
  end

  scenario 'Successfully creating a new blog' do
    new_blog_page.create title: 'My Blog Title',
                         text: 'My new blog text'

    expect(view_blog_page).to have_loaded
    expect(view_blog_page).to have_blog title: 'My Blog Title',
                                        text: 'My new blog text'
  end

  scenario 'Entering no data' do
    new_blog_page.create title: '',
                         text: ''

    expect(view_blog_page).to_not have_loaded
    expect(new_blog_page).to have_errors "Title can't be blank",
                                         "Text can't be blank",
                                         "Title is too short",
                                         "Text is too short"
  end
end
