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

  it 'is invalid without body' do
    idea = new_idea
    idea.body = nil
    expect(idea).to_not be_valid
  end

  it 'is has default quality of thousand' do
    expect(new_idea.quality).to eq('thousand')
  end

  it 'can only have the three available qualities' do
    idea = new_idea
    idea.save

    expect{idea.update_attributes(quality: 3)}.to raise_error(ArgumentError)
  end

  def new_idea
    Idea.new(title: "Hi", body: "body")
  end
end
