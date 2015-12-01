class Api::V1::IdeasController < ApplicationController
  def index
    render json: Idea.order(created_at: :desc)
  end

  def update
  end

  def create
    idea = Idea.new(idea_params)
    if idea.save
      render json: true
    else
      render json: true, status: 400
    end
  end

  def idea_params
    {title: params["title"], body: params["body"]}
  end

  def destroy
    Idea.find(params[:id]).delete
    render json: true
  end
end
