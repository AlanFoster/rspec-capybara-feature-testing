require 'rails_helper'

feature 'Form Examples', type: :feature do
  scenario 'Visiting the main page' do
    visit '/'
    click_on 'Form Examples'

    expect(page).to have_content('JavaScript Examples')
  end
end
