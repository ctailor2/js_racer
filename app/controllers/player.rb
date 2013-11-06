get '/register' do
  erb :register 
end

post '/register' do
  @player = Player.create(initials: params[:initials], name: params[:name])
  if @player.valid?
    redirect to('/')
  else
    @errors = @player.errors
    erb :register
  end
end
