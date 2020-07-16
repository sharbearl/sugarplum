var GameOn;
var playerX, playerY;
var timerX;
var circleX, circleY;


function setup(){
  createCanvas(1100, 500);
  background(255, 250, 242);
  frameRate(100);
  GameOn = true;
  playerX = 550;
  playerY = 460;
  timerX = 1100;
  circleX = random(20, 1080);
  circleY = random(20, 480);
}
  
function draw(){
    if(GameOn = true){
      background(255, 250, 242);
      noStroke();
      fill(255, 156, 228);
      ellipse(playerX, playerY, 30, 30);
      if(keyIsPressed && keyCode == UP_ARROW){
        playerY -= 10
      }
      else if(keyIsPressed && keyCode == DOWN_ARROW){
        playerY += 10
      }
      else if(keyIsPressed && keyCode == LEFT_ARROW){
        playerX -= 10
      }
      else if(keyIsPressed && keyCode == RIGHT_ARROW){
        playerX += 10
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
      line(0, 5, timerX, 5);
      if(timerX > 0){
        timerX -= 0.5
      }
      else{
        GameOn = false;
      }
      
      noStroke();
      fill(0);
      ellipse(circleX, circleY, 20, 20);
//       if(circleX < playerX - 15 && circleX > playerX + 15 && circleY < playerY + 15 && circleY > playerY - 15){
//         circleX = random(20,1080);
//         circleY = random(20, 480);
//     }

    }
    else{
      background(255, 250, 242);
    }
}
