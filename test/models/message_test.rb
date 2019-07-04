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

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
