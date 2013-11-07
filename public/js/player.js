function Player(id){
  this.id = id;
  this.position = 1;
}

Player.prototype.advance = function(){
  this.position ++;
}
