require 'rails_helper'

describe Idea do
  it 'is valid' do
    expect(new_idea).to be_valid
  end

  it 'is invalid without title' do
    idea = new_idea
    idea.title = nil
    expect(idea).to_not be_valid
  end


  def new_idea
    Idea.new(title: "Hi", body: "body", quality: 1)
  end
end
