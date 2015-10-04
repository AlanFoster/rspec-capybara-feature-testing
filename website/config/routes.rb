Rails.application.routes.draw do
  root 'welcome#index'

  get 'welcome/index'
  get 'javascript/index'

  resources :blogs
end
