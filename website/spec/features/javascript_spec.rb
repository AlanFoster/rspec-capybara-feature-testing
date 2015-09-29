require 'rails_helper'

feature 'JavaScript Examples', type: :feature do
  scenario 'Visiting the main page' do
    visit '/'
    click_on 'JavaScript'

    expect(page).to have_content('JavaScript Examples')
  end
end
