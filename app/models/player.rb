class Player < ActiveRecord::Base
  # Remember to create a migration!
  has_many :games
  has_many :races, through: :games

end
