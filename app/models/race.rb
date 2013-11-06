class Race < ActiveRecord::Base 
  attr_accessor :players

  has_many :games
  has_many :players, through: :games
  # validates :url, :uniqueness => true
  # validates_associated :games, :message => "can't contain the same player more than once."

  validate :players_are_not_the_same, :on => :create
  before_create :create_games_for_players

  def players_are_not_the_same
    if players[0] == players[1]
      errors.add(:players, "cannot be the same")
    end
  end

  def create_games_for_players
    players.each do |player|
      self.games.build(:player_id => player)
    end
  end
end
