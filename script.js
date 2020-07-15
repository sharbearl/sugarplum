var GameOn;
var playerX, playerY;

function setup(){
  createCanvas(1100, 500);
  background(245, 235, 220);
  frameRate(100);
  GameOn = true;
  playerX = 550;
  playerY = 460;
}
  
function draw(){
    if(GameOn = true){
      noStroke();
      fill(255, 156, 228);
      ellipse(playerX, playerY, 30, 30);
      if(keyIsPressed && keyCode == UP_ARROW){
        playerY -= 5
      }
      if(keyIsPressed && keyCode == DOWN_ARROW){
        playerY += 5
      }
      if(keyIsPressed && keyCode == LEFT_ARROW){
        playerX -= 5
      }
      if(keyIsPressed && keyCode == RIGHT_ARROW){
        playerX += 5
      }
    }
    else{
    }
}
