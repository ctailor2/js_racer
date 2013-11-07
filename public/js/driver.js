$(document).ready(function(){
  var p1 = new Player($("#player1_strip").data("player-id"));
  var p2 = new Player($("#player2_strip").data("player-id"));
  var race = new Race(p1, p2);

  race.start();
  
});

