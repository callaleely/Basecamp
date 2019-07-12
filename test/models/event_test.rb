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

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
