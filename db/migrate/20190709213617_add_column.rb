class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :scopes, :description, :string
  end
end
