class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :title, null: false
      t.string :body
      t.integer :scope_id, null: false
      t.integer :creator_id, null: false
      t.integer :subscriber_id
      t.timestamps
    end
    add_index :messages, :scope_id, unique: true
  end
end
