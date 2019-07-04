# == Schema Information
#
# Table name: scopes
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  type          :string           not null
#  subscriber_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Scope < ApplicationRecord

  has_many :todolists,
  primary_key: :id,     
  foreign_key: :scope_id, 
  class_name: 'TodoList'

  has_many :messages,
  primary_key: :id,     
  foreign_key: :scope_id, 
  class_name: 'Message'

  has_many :events,
  primary_key: :id,     
  foreign_key: :scope_id, 
  class_name: 'Event'
end
