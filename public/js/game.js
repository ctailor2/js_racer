function Race(p1, p2){
  this.p1 = p1;
  this.p2 = p2;
}


Race.prototype.start = function(){
  race = this;
  $(document).one("keyup", function(event){
    race.startTime = event.timeStamp;
  });
  race.keyListener();
}

Race.prototype.keyListener = function(){
  var race = this;

  $(document).on("keyup", function(event){
    var key = event.keyCode;
    if (key == 81){
      race.updatePosition(race.p1)
    }
    else if (key == 80){
      race.updatePosition(race.p2)
    }
  });
}

Race.prototype.updatePosition = function(player){
  var currentBlock = $("#player" + player.id + "_strip .active")
  var nextBlock = currentBlock.next();
  currentBlock.removeClass();
  nextBlock.addClass("active");
  player.advance();
  this.winChecker();
}

Race.prototype.winChecker = function(){
  var race = this;
  if (race.p1.position === 20) {
    race.announceWinner(race.p1);
  }
  else if (race.p2.position === 20) {
    race.announceWinner(race.p2);
  }
}

Race.prototype.announceWinner = function(player){
  race = this;
  $(document).off("keyup");
  $.post("/record_results", { 
    duration: ($.now() - race.startTime)/1000.0, 
    winner_id: player.id, 
    race_id: $(".racer_table").data("race-id") }, 
    function(response){
      $("#results").html(response);
  });
}
