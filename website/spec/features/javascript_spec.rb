require 'feature_helper'

feature 'JavaScript Examples', type: :feature, js: true do
  def stub_github
    github_url = 'https://api.github.com:443/'
    proxy.stub(github_url, method: :options).and_return(
      headers: {
        'Access-Control-Allow-Methods' => 'GET, PATCH, POST, PUT, OPTIONS',
        'Access-Control-Allow-Headers' => 'X-Force-Cors',
        'Access-Control-Allow-Origin' => '*'
      },
      code: 200
    )
    proxy.stub(github_url).and_return({
      headers: {
        'Access-Control-Allow-Methods' => 'GET, PATCH, POST, PUT, OPTIONS',
        'Access-Control-Allow-Origin' => '*'
      },
      json: {
        mock_server_response: true,
        current_user_url: 'https://api.github.com/user'
      }
    })
  end

  before(:each) do
    stub_github

    visit '/'
    click_on 'JavaScript'
  end

  scenario 'Submitting form data' do
    expect(page).to have_content('JavaScript Examples')

    click_on 'Get Server Response'
    expect(page).to have_content('Waiting for Server response...')
    expect(page).to_not have_content('Successfully retrieved server response')

    expect(page).to have_content('Successfully retrieved server response')
    expect(page).to have_content('"mock_server_response": true,')
    expect(page).to_not have_content('Waiting for Server response...')
  end
end
