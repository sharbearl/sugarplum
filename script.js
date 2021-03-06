var GameOn;
var playerX, playerY;
var timerX;
var circleX, circleY;
var score;

function setup() {
  createCanvas(1100, 500);
  background(255, 250, 242);
  frameRate(100);
  GameOn = true;
  playerX = 550;
  playerY = 460;
  timerX = 1100.5;
  circleX = random(20, 1080);
  circleY = random(20, 480);
  score = 0;
}

function draw() {
  if (GameOn) {
    background(255, 250, 242);
    noStroke();
    fill(255, 156, 228);
    ellipse(playerX, playerY, 30, 30);
    if (keyIsPressed && keyCode == UP_ARROW) {
      playerY -= 10;
    } else if (keyIsPressed && keyCode == DOWN_ARROW) {
      playerY += 10;
    } else if (keyIsPressed && keyCode == LEFT_ARROW) {
      playerX -= 10;
    } else if (keyIsPressed && keyCode == RIGHT_ARROW) {
      playerX += 10;
    }

    if (playerX >= 1070) {
      playerX = 1070;
    }
    if (playerX <= 30) {
      playerX = 30;
    }
    if (playerY >= 470) {
      playerY = 470;
    }
    if (playerY <= 30) {
      playerY = 30;
    }

    fill(0);
    textSize(35);
    text(score, 1050, 30);

    stroke(227, 206, 172);
    strokeWeight(5);
    line(0, 5, timerX, 5);
    timerX -= 0.5;
    checkGameOn();

    noStroke();
    fill(0);
    ellipse(circleX, circleY, 20, 20);

    if (collideCircleCircle(circleX, circleY, 20, playerX, playerY, 30)) {
      score++;
      circleX = random(20, 1080);
      circleY = random(20, 480);
    }
  }
  if (GameOn == false) {
    background(255, 250, 242);
    noStroke();
    fill(227, 206, 172);
    rect(480, 215, 137, 50, 30)
    fill(0);
    textSize(50);
    text("Score: " + score, 450, 200);
    textSize(30);
    text("Restart", 500, 250);
    restart();   
  }
}

function checkGameOn() {
  if (timerX <= 0) {
    GameOn = false;
  }
}
  
function restart(){
  if(mouseIsPressed){
      if(mouseX > 480 && mouseX < 617 && mouseY > 215 && mouseY < 265){
        GameOn = true;
        playerX = 550;
        playerY = 460;
        timerX = 1100.5;
        circleX = random(20, 1080);
        circleY = random(20, 480);
        score = 0;
      }
  }
}
