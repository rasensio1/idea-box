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

      it 'truncates idea body if greater than 100 chars' do
      Idea.create!(title: "long body", body: "1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234  6 WOOHOO  8")
        expect(page).to_not have_content("6")
        expect(page).to_not have_content("WOOHOO")
        expect(page).to_not have_content("8")
      end

      it 'can doesnt add invaid ideas' do
        visit root_path

        page.fill_in 'idea_body',
          :with => 'my body'

        find("#submit-button").click

        expect(page).to have_content("You need to")
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

    describe 'editing an idea', js: true do
      it 'can edit the title and body' do
        Idea.create!(title: "first", body: "yeah", quality: "billion")
        visit root_path

        find(".edit-button").click

        within(:css, ".idea-container") do
          page.fill_in 'idea[title]',
            :with => 'first oh yeah'

          page.fill_in 'idea[body]',
            :with => 'yeah yeah yeah'
        end


        find(".edit_idea_submit").click

        expect(page).to have_content("first oh yeah")
        expect(page).to have_content("yeah yeah yeah")
      end
    end

    describe 'filtering' do
      it 'can find things that exist' do
        Idea.create!(title: "first", body: "yeah", quality: "billion")
        Idea.create!(title: "firstest", body: "OKOK", quality: "billion")
        Idea.create!(title: "Rabbit", body: "Hole", quality: "billion")

        visit root_path

        page.fill_in 'page[search]',
            :with => 'first'

        expect(page).to have_content("yeah")
        expect(page).to have_content("OKOK")
        expect(page).to_not have_content("Rabbit")
      end
    end

    describe 'sorting' do
      it 'can sort based on quality' do
        Idea.create!(title: "title1", body: "yeah", quality: "million")
        Idea.create!(title: "title2", body: "yeah", quality: "thousand")
        Idea.create!(title: "title3", body: "yeah", quality: "billion")

        visit root_path

        find("#sort-by-value").click

        page.body.should =~ /.*title3.*title1.*title2/
      end

    end
  end
end

