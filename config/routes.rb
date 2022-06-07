Rails.application.routes.draw do
  resources :authors
  resources :addresses do
    collection do 
      get "state"
    end
  end
  resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get "/stimulus", to: "stimulus#index"
  get "/preview", to: "stimulus#preview_stimulus"
  get "/messages", to: "stimulus#messages"

  # Defines the root path route ("/")
  root "posts#index"
  get "/live_search", to: "cocktails#index"
  get "/all_get_data", to: "cocktails#get_data"
end
