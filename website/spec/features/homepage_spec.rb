require 'rails_helper'

feature 'Visiting the homepage', type: :feature do
  scenario 'Visiting the homepage' do
    visit '/welcome/index'
    expect(page).to have_content('Welcome!')
  end
end
