var GameOn, play;
var playerX, playerY;

function setup(){
  createCanvas(1100, 500);
  background(245, 235, 220);
  frameRate(100);
  GameOn = true;
  play = true;
  playerX = 0;
  playerY = 0;
}
  
function draw(){
  if(play = true){
    stroke(150, 178, 255);
    strokeWeight(5);
    fill(217, 241, 255);
    rect(500, 230, 100, 40, 60);
    if(mouseIsPressed && mouseX > 500 && mouseX < 600 && mouseY > 230 && mouse Y < 270){
      play = false
    }
  }
  if(play = false){
    if(GameOn = true){
      noStroke();
      fill(255, 156, 228);
      ellipse(550, 460, 30, 30);
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
}
