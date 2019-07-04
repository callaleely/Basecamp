# == Schema Information
#
# Table name: todo_lists
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :string
#  creator_id :integer          not null
#  due_date   :date
#  scope_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TodoList < ApplicationRecord
  validates :title, :creator_id, :scope_id, presence: true

  belongs_to :creator,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: 'Users' 

  belongs_to :scope,
  primary_key: :id,
  foreign_key: :scope_id,
  class_name: 'Scope'

  has_many :todos,
  primary_key: :id,
  foreign_key: :list_id,
  class_name: `Todo`

end
