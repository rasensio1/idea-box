require 'rails_helper'

describe Idea do
  it 'can promote' do
    params = {"qualityChange" => "promote"}
    expect(QualityChanger.go(params, "thousand")).to eq("million")
    expect(QualityChanger.go(params, "million")).to eq("billion")
    expect(QualityChanger.go(params, "billion")).to eq("billion")
  end

  it 'can demote' do
    params = {"qualityChange" => "demote"}
    expect(QualityChanger.go(params, "thousand")).to eq("thousand")
    expect(QualityChanger.go(params, "million")).to eq("thousand")
    expect(QualityChanger.go(params, "billion")).to eq("million")
  end
end
