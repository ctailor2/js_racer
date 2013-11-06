class CreateRaces < ActiveRecord::Migration
  def change
    create_table :races do |t|
      t.string :duration
      t.string :url
      t.timestamps
    end
    # add_index :races, :url, :unique => true
  end
end
