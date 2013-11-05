class CreateRaces < ActiveRecord::Migration
  def change
    create_table :races do |t|
      t.float :duration
      t.string :url
      t.timestamps
    end
  end
end
