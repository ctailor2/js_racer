$(document).ready(function() {
  var player1_position = 1;
  var player2_position = 1;
  var player3_position = 1;
  var player4_position = 1;
  $(document).one('keyup', function(event){
    event.preventDefault();
    start_time = event.timeStamp;
  });
  $(document).on('keyup', function(event) {
    event.preventDefault();
    var key = event.keyCode;
    if (key == 81){
      // Q
      var current_block = $("#player1_strip .active");
      var next_block = current_block.next();
      current_block.removeClass();
      next_block.addClass("active");
      player1_position += 1
      if (player1_position == 20) {
        var end_time = $.now();
        var duration = (end_time - start_time)/1000.0;
        alert("Player 1 wins!");
        $(document).off("keyup");
        $.post("/record_results",{ duration: duration, winner_id: $("#player1_strip").data("player-id"), race_id: $(".racer_table").data("race-id") }, function(response){
          $("#results").html(response);
        });
      }
    }
    else if (key == 80){
      // Q
      var current_block = $("#player2_strip .active");
      var next_block = current_block.next();
      current_block.removeClass();
      next_block.addClass("active");
      player2_position += 1
      if (player2_position == 20) {
        var end_time = $.now();
        var duration = (end_time - start_time)/1000.0;
        alert("Player 2 wins!");
        $(document).off("keyup");
        $.post("/record_results",{ duration: duration, winner_id: $("#player2_strip").data("player-id"), race_id: $(".racer_table").data("race-id") }, function(response){
          $("#results").html(response);
        });
      }
    }
    else if(key == 90){
      // Z
      var current_block = $("#player3_strip .active");
      var next_block = current_block.next();
      current_block.removeClass();
      next_block.addClass("active");
      player2_position += 1
      if (player2_position == 20) {
        var end_time = $.now();
        var duration = (end_time - start_time)/1000.0;
        alert("Player 3 wins!");
        $(document).off("keyup");
        $.post("/record_results",{duration: duration, winner: $("#player3_strip").data("player-id")}, function(response){
          debugger;
        });
      }
    }
    else if(key == 188){
      // comma ,
      var current_block = $("#player4_strip .active");
      var next_block = current_block.next();
      current_block.removeClass();
      next_block.addClass("active");
      player2_position += 1
      if (player2_position == 20) {
        var end_time = $.now();
        var duration = (end_time - start_time)/1000.0;
        alert("Player 3 wins!");
        $(document).off("keyup");
        $.post("/record_results",{duration: duration, winner: $("#player4_strip").data("player-id")}, function(response){
          debugger;
        });
      }
    }
  });

});

function Race () {
  this.start_time = $.now();
}

Race.prototype.render = function() {

}

Race.prototype.start = function() {
  alert("Starting a race!");
}

Race.prototype.finish = function() {

}

function Player () {
  this.start_position = 1;
}

var race = new Race();
race.start
