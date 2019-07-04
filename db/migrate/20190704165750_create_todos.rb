class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :title, null: false
      t.integer :list_id, null: false
      t.integer :creator_id, null: false
      t.integer :owner_id
      t.integer :subscriber_id
      t.date :due_date
      t.string :note
      t.timestamps
    end
    add_index :todos, :list_id, unique: true 
  end
end
