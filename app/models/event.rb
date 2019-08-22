# == Schema Information
#
# Table name: events
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  scope_id      :integer          not null
#  start         :datetime         not null
#  end           :datetime         not null
#  repeat        :string           not null
#  creator_id    :integer          not null
#  subscriber_id :integer
#  note          :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Event < ApplicationRecord

  validates :title, :scope_id, :start, :end, :creator_id, presence: true

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
  class_name: 'User'

end
