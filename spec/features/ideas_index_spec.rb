require 'rails_helper'
RSpec.feature 'the app' do

  describe 'the index', js: true do
    it 'loads all the ideas' do
      Idea.create(title: "first", body: "yeah")
      Idea.create(title: "second", body: "okedoke")

      visit root_path

      wait_for_ajax

      expect(page).to have_content("first")
      expect(page).to have_content("yeah")
      expect(page).to have_content("second")
      expect(page).to have_content("okedoke")
    end
  end
end

