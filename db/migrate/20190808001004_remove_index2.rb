class RemoveIndex2 < ActiveRecord::Migration[5.2]
  def change
    remove_index :messages, :scope_id
  end
end
