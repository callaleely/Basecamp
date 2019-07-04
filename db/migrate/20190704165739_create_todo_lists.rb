class CreateTodoLists < ActiveRecord::Migration[5.2]
  def change
    create_table :todo_lists do |t|
      t.string :title, null: false
      t.string :body
      t.integer :creator_id, null: false
      t.date :due_date
      t.integer :scope_id, null: false
      t.timestamps
    end
    add_index :todo_lists, :title
    add_index :todo_lists, :scope_id, unique: true 
  end
end
