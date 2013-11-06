require 'faker'

# home page containing the 
# "start_game" button
get '/' do
  @players = Player.all
  erb :index
end

# Have a submit button that submits
# user info to the server and directs
# them to the page where they can 
# start playing
post '/race' do
  race = Race.create(url: Faker::Lorem.characters(8), players: params[:player_ids])
  
  if race.valid?
    redirect to("/race/#{race.url}")
  else
    @errors = race.errors
    @players = Player.all
    erb :index
  end

end

# page where they actually play.
get '/race/:race_url' do
  @race = Race.find_by_url(params[:race_url])
  @players = []
  @race.games.sort_by { |game| game.id }.each do | game |
    @players << game.player
  end

  if @race.duration.nil?
    erb :race
  else
    @race.games.each do |game|
      if game.winner == true
        @winner = Player.find(game.player_id)
      end
    end
    @duration = @race.duration
    erb :_results
  end
end

post '/record_results' do
  @duration = params[:duration]
  @winner = Player.find(params[:winner_id])
  @race = Race.find(params[:race_id])
  @winner_game = Game.find_by_player_id_and_race_id(@winner.id, @race.id)

  Game.update(@winner_game.id, :winner => true)
  Race.update(@race.id, :duration => @duration)

  if request.xhr?
    erb :_results, :layout => false
  else
    erb :_results
  end
end 

#have a href that directs the 
#user to this view if they click on it
get '/view_results' do
  erb :view_results
end

