class Idea < ActiveRecord::Base
  default_scope { order('created_at DESC') }

  validates :title, :body, presence: true
  enum quality: [ :thousand, :million, :billion]
end
