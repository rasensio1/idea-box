class Api::V1::IdeasController < ApplicationController
  def index
    render json: Idea.order(created_at: :desc)
  end

  def create
    new_idea = Idea.new(idea_params)
    if new_idea.save
      render json: {text: "Saved new idea!"}
    else
      render json: {text: "Idea not saved!"}
    end
  end

  def idea_params
    params.require(:idea).permit(:title, :body)
  end
end
