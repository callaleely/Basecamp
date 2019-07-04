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

require 'test_helper'

class ScopeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
