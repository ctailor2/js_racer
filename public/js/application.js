$(document).ready(function() {
  var player1_position = 1;
  var player2_position = 1;
  $(document).one('keyup', function(event){
    event.preventDefault();
    start_time = event.timeStamp;
  });
  $(document).on('keyup', function(event) {
    event.preventDefault();
    var key = event.keyCode;
    if (key == 81){
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
        $.post("/record_results",{duration: duration, winner: $("#player1_strip").data("player-id")}, function(response){
          debugger;
        });
      }
    }
    else if(key == 80){
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
        $.post("/record_results",{duration: duration, winner: $("#player1_strip").data("player-id")}, function(response){
          debugger;
        });
      }
    }
  });

});


// q is 81

// p is 80