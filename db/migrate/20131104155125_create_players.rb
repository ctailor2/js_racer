class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :initials
      t.string :name
      t.timestamps
    end
    add_index(:players, [:initials, :name], :unique => true)
  end
end
