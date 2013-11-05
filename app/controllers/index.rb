
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
post '/start_game' do
  new_race = Race.create()

  player1_id = params[:player1_id]
  player2_id = params[:player2_id]

  new_race.games.create(player_id: player1_id)
  new_race.games.create(player_id: player2_id)

  redirect to("/play_game/#{new_race.id}")
end

# page where they actually play.
get '/play_game/:race_id' do
  @race = Race.find(params[:race_id])
  @players = @race.players

  erb :play_game
end

post '/record_results' do
  @duration = params[:duration]
  @winner = params[:winner]

  erb :view_results, :layout => false
end 

#have a href that directs the 
#user to this view if they click on it
get '/view_results' do
  erb :view_results
end

