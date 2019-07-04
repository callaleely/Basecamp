# == Schema Information
#
# Table name: todos
#
#  id            :bigint           not null, primary key
#  title         :string           not null
#  list_id       :integer          not null
#  creator_id    :integer          not null
#  owner_id      :integer
#  subscriber_id :integer
#  due_date      :date
#  note          :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Todo < ApplicationRecord
  validates :title, :list_id, :creator_id, presence: true

  belongs_to :todolist,
  primary_key: :id,
  foreign_key: :list_id,
  class_name: 'TodoList'

  belongs_to :creator,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: 'User'

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: 'User'

  belongs_to :subscriber,
  primary_key: :id,
  foreign_key: :subscriber_id,
  class_name: 'User'
  
end
