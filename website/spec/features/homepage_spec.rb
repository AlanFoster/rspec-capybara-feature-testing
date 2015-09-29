require 'rails_helper'

feature 'Homepage', type: :feature do
  scenario 'Visiting the homepage' do
    visit '/'
    expect(page).to have_content('Welcome!')
  end

  scenario 'visiting the homepage and navigating to the homepage' do
    visit '/'
    click_on 'Home'
    expect(page).to have_content('Welcome!')
  end
end
