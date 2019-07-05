Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, {format: :json} do
    resources :users, only:[:create]
    resource :session, only:[:create, :destroy]
    resources :scopes, except: [:edit, :new] do
      resources :todo_lists, except: [:edit, :new] do
        resources :todos, except: [:edit, :new]
      end
      resources :messages, except: [:edit, :new]
      resources :events, except: [:edit, :new]
      end
  end

  root "static_pages#root"
end
