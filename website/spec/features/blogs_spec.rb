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

  scenario 'Entering no data' do
    visit '/'
    click_on 'Form Examples'

    expect(page).to have_content('Create Blog')

    click_on 'Save Blog'

    expect(page).to have_content('4 errors stopped this form being submitted')

    expect(page).to have_content("Title can't be blank")
    expect(page).to have_content("Text can't be blank")

    expect(page).to have_content('Title is too short')
    expect(page).to have_content('Text is too short')
  end
end
