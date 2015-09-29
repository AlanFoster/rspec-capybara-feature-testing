Rails.application.routes.draw do
  root 'welcome#index'

  get 'welcome/index'
  get 'javascript/index'
  get 'forms/index'
end
