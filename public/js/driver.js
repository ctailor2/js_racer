$(document).ready(function(){
  $("#start_race").submit(function(event){
    var p1 = new Player($("#player1").val());
    var p2 = new Player($("#player2").val());
    var race = new Race(p1, p2);
  });

  debugger;
});

