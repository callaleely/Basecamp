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

require 'test_helper'

class TodoListTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
