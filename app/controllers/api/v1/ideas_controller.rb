class Api::V1::IdeasController < ApplicationController

  def show
    render json: my_idea
  end

  def index
    render json: Idea.order(params["order"])
  end

  def update
    my_idea.update_attributes(edit_params)
    render json: true
  end

  def create
    idea = Idea.new(idea_params)
    if idea.save
      render json: true
    else
      render json: true, status: 400
    end
  end

  def destroy
    my_idea.delete
    render json: true
  end

  private
  def my_idea
    Idea.find(params[:id])
  end

  def idea_params
    {title: params["title"], body: params["body"]}
  end

  def edit_params
    params.permit(:title, :body).merge(
      {quality: QualityChanger.go(params, my_idea.quality)}
    )
  end
end
