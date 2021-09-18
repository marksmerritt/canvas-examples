Rails.application.routes.draw do
  root "home#index"

  get :bar_chart, to: "charts#bar_chart"
  get :pie_chart, to: "charts#pie_chart"

  resources :hello_world, only: [:index]
end
