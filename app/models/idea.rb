class Idea < ActiveRecord::Base
  validates :title, :body, presence: true
  enum quality: [ :thousand, :million, :billion]
end
