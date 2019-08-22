class RemoveIndex3 < ActiveRecord::Migration[5.2]
  def change
    remove_index :events, :scope_id
  end
end
