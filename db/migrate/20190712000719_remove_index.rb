class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :scopes, :category 
  end
end
