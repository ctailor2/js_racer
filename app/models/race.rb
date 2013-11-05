class Race < ActiveRecord::Base 
  has_many :games
  has_many :players, through: :games
end
