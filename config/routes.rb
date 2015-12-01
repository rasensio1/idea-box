Rails.application.routes.draw do
  root 'static#show'

  namespace 'api' do
    namespace 'v1' do
      resources 'ideas', only: [:index], defaults: {format: :json}
    end
  end
end
