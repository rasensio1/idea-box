class Api::V1::IdeasController < ApplicationController
  def index
    render json: Idea.order(created_at: :desc)
  end
end
