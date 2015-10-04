require 'feature_helper'

feature 'JavaScript Examples', type: :feature, js: true do
  before(:each) do
    visit '/'
    click_on 'JavaScript'
  end

  scenario 'Submitting form data' do
    expect(page).to have_content('JavaScript Examples')

    click_on 'Get Server Response'
    expect(page).to have_content('Waiting for Server response...')
    expect(page).to_not have_content('Successfully retrieved server response')

    expect(page).to have_content('Successfully retrieved server response')
    expect(page).to_not have_content('Waiting for Server response...')
  end
end
