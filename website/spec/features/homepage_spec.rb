require 'feature_helper'

feature 'Homepage', type: :feature do
  scenario 'Visiting the homepage' do
    visit '/'
    expect(page).to have_content('Welcome!')
  end
end
