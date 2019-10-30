class Message < ApplicationRecord
  belong_to:users
  belong_to:groups

  validates :content, presence: true, unless: :image?
end
