Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :friends, only: [:index, :update] do
      resources :blogs, only: [:index, :create]
    end
    get 'myfriends', to: 'friends#myfriends'
  end
end
