class CreateScopes < ActiveRecord::Migration[5.2]
  def change
    create_table :scopes do |t|
      t.string :name, null: false
      t.string :type, null: false
      t.integer :subscriber_id
      t.timestamps
    end
    # add_index :scopes, :type
  end
end
