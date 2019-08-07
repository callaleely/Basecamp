class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :todo_lists, :scope_id
  end
end
