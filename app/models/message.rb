# == Schema Information
#
# Table name: messages
#
#  id            :bigint           not null, primary key
#  title         :string           not null
#  body          :string
#  scope_id      :integer          not null
#  creator_id    :integer          not null
#  subscriber_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Message < ApplicationRecord
  
  validates :title, :scope_id, :creator_id, presence: true

  belongs_to :scope,
  primary_key: :id,  
  foreign_key: :scope_id, 
  class_name: 'Scope'

  belongs_to :creator,
  primary_key: :id,  
  foreign_key: :creator_id, 
  class_name: 'User'

  belongs_to :subscriber,
  primary_key: :id,  
  foreign_key: :subscriber_id, 
  class_name: 'User',
  optional: true
  
end
