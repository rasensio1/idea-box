require 'rails_helper'

describe Idea do
  it 'is valid' do
    expect(new_idea).to be_valid
  end


  def new_idea
    Idea.new(title: "Hi", body: "body", quality: 1)
  end
end
