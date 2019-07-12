class ChangeColumnName1 < ActiveRecord::Migration[5.2]
  def change
    rename_column :scopes, :type, :category
    # rename_column :events, :repear, :repeat
  end
end
