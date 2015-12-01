require 'rails_helper'
RSpec.feature 'the app' do

  describe 'the index', js: true do
    it 'loads all the ideas' do
      Idea.create!(title: "first", body: "yeah")
      Idea.create!(title: "second", body: "okedoke")

      visit root_path

      expect(page).to have_content("first")
      expect(page).to have_content("yeah")
      expect(page).to have_content("thousand")
      expect(page).to have_content("second")
      expect(page).to have_content("okedoke")
    end

    it 'can add ideas', js: true do
      visit root_path

      page.fill_in 'idea_title',
        :with => 'my title'

      page.fill_in 'idea_body',
        :with => 'my body'

      find("#submit-button").click

      expect(page).to have_content("my title")
      expect(page).to have_content("my body")
      expect(page).to have_content("thousand")
    end
  end
end

