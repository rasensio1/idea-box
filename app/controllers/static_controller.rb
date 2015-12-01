class StaticController < ApplicationController
  def show 
    @idea = Idea.new
  end
end
