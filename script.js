var GameOn;
var playerX, playerY;


function setup(){
  createCanvas(1100, 500);
  background(255, 250, 242);
  frameRate(100);
  GameOn = true;
  playerX = 550;
  playerY = 460;
}
  
function draw(){
    if(GameOn = true){
      background(255, 250, 242);
      noStroke();
      fill(255, 156, 228);
      ellipse(playerX, playerY, 30, 30);
      if(keyIsPressed && keyCode == UP_ARROW){
        playerY -= 5
      }
      else if(keyIsPressed && keyCode == DOWN_ARROW){
        playerY += 5
      }
      else if(keyIsPressed && keyCode == LEFT_ARROW){
        playerX -= 5
      }
      else if(keyIsPressed && keyCode == RIGHT_ARROW){
        playerX += 5
      }
      
      if(playerX >= 1070){
        playerX = 1070
      }
      if(playerX <= 30){
        playerX = 30
      }
      if(playerY >= 470){
        playerY = 470
      }
      if(playerY <= 30){
        playerY = 30
      }
      
      stroke(227, 206, 172);
      strokeWeight(5);
      line(0, 5, 1100, 5);

    }
    else{
    }
}
