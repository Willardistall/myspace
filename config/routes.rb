Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :friends, only: [:index, :update]
    resources :blogs, only: [:index, :create]
    get 'myfriends', to: 'friends#myfriends'
  end
end
