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

require 'test_helper'

class TodoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
