class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.integer :scope_id, null: false
      t.datetime :start, null: false
      t.datetime :end, null: false
      t.string :repeat, null: false 
      t.integer :creator_id, null: false
      t.integer :subscriber_id
      t.string :note
      t.timestamps
    end
    add_index :events, :name
    add_index :events, :scope_id, unique: true
  end
end
