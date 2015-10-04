require 'feature_helper'

feature 'Form Examples', type: :feature do
  scenario 'Successfully creating a new blog' do
    visit '/'
    click_on 'Form Examples'

    expect(page).to have_content('Create Blog')

    fill_in 'blog_title', with: 'My Blog Title'
    fill_in 'blog_text', with: 'My new blog text'

    click_on 'Save Blog'

    expect(page).to have_selector('.blog--show')

    expect(page).to have_content('My Blog Title')
    expect(page).to have_content('My new blog text')
  end
end
