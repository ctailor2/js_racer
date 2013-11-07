$(document).ready(function(){
  var p1 = new Player($("table tr:nth-child(1)").data("player-id"))
  var p2 = new Player($("table tr:nth-child(2)").data("player-id"))
  var race = new Race(p1, p2);

  race.start();
  
});

