class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :events, :name, :title
    rename_column :events, :repeat, :allDay?
    rename_column :events, :note, :resource?
  end
end
