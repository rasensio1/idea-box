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

    describe 'adding ideas', js: true do
      it 'can add ideas' do
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

      xit 'can doesnt add invaid ideas' do
        visit root_path

        page.fill_in 'idea_body',
          :with => 'my body'

        find("#submit-button").click

        expect(page).to have_content("nope")
      end
    end

    it 'can delete ideas', js: true do
      Idea.create!(title: "first", body: "yeah")

      visit root_path

      find(".delete-button").click
      expect(page).to_not have_content("yeah")
    end

    describe 'changing quality', js: true do
      it 'can increase quality' do
        Idea.create!(title: "first", body: "yeah")

        visit root_path

        find(".promote-button").click
        expect(page).to have_content("million")
      end

      it 'can decrease quality' do
        Idea.create!(title: "first", body: "yeah", quality: "billion")

        visit root_path

        find(".demote-button").click
        expect(page).to have_content("million")
      end
    end


  end
end

