var GameOn;
var playerX, playerY;

function setup(){
  createCanvas(1100, 500);
  background(255, 237, 247);
  frameRate(100);
  GameOn = true;
  playerX = playerY = 0;
}
  
function draw(){
  if(GameOn = true){
    noStroke();
    fill(255, 156, 228);
    ellipse(550, 480, 30, 30);
  }
  else{
  }
}
