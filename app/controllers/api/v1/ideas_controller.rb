class Api::V1::IdeasController < ApplicationController
  def index
    render json: Idea.order(created_at: :desc)
  end

  def create
    Idea.create(idea_params)
    render json: true
  end

  def idea_params
    {title: params["title"], body: params["body"]}
  end
end
