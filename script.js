var GameOn;
var playerX, playerY;
var circle1_Y;
var circle;

function setup(){
  createCanvas(1100, 500);
  background(245, 235, 220);
  frameRate(100);
  GameOn = true;
  playerX = 550;
  playerY = 460;
  circle1_Y = -10;
  circleX = random(20,1080);
  circleY = random(20, 480);
}
  
function draw(){
    if(GameOn = true){
      background(245, 235, 220);
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
      
      fill(0);
      ellipse (10, circle1_Y, 30, 30);
      if(circle1_Y >= 510){
        circle1_Y = -10
      }
      else{
        circle1_Y += 10
      }
      
      fill(0);
      ellipse(circleX, circleY, 20, 20);
      if(circleX < playerX - 15 && circleX > playerX + 15 && circleY < playerY + 15 && circleY > playerY - 15)
        circleX = random(20,1080);
        circleY = random(20, 480);
    }
    }
    else{
    }
}
