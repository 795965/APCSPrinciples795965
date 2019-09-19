//  Ziggy Sheynin
//Project 916 PaddleGame
////  This is a comment
//  The setup function function is called once when your program begins

var balls = []; //declares array
var paddle;
var difficulty;
var score =0;
var gameState = 1;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadObjects(10);

//   if(difficulty === 1){
//     loadObjectS(5);
//   } else if (difficulty === 2){
//     loadObjects (10);
//   } else if (difficulty === 3){
//     loadObjects(40);
// }
  }

//  The draw function is called @ 30 fps
function draw() {

background(5,5,5);
if (gameState ===1){
  startGame(); //start screen
}else if (gameState === 2){
  playGameEasy(); //game screen
}else if (gameState === 3){
  playGameMedium(); //game screen
}
else if (gameState === 4){
  playGameHard(); //game screen
}
else if (gameState === 5){
  endGame(); //game over screen
}
}



function startGame(){//easy, medium, hard
  textSize(75);
  fill(255, 255, 240);
  textAlign(CENTER);
  text("Paddle Game", 400, 300); // title text

  fill(0,200,0); //easy button
  rect(50, 610, 200, 100);
  fill(0,0,0);
  textSize(40);
  textAlign(CENTER);
  text("Easy", 150, 675);

  fill(0,204,204); //medium button
  rect(300, 610, 200, 100);
  fill(0,0,0);
  textSize(40);
  textAlign(CENTER);
  text("Medium", 400, 675);

  fill(153,0,0); //hard button
  rect(550, 610, 200, 100);
  fill(0,0,0);
  textSize(40);
  textAlign(CENTER);
  text("Hard", 650, 675);

  fill(179,179,179); //Instructions button
  rect(550, 75, 210, 100);
  fill(0,90,0);
  textSize(40);
  textAlign(CENTER);
  text("Instructions", 655, 145);

  if( mouseX < 50 && mouseX > 250 && mouseY < 610 && mouseY > 710){
    gameState = 3;
  }
  // if()

mouseClicked();

}// end start game

function playGameEasy(){
  fill (255);
  textSize (40);
  text ("SCORE:" + score, 100 , 50);
  LoadObjects(5);
  runObjects();

}

function playGameMedium(){
  fill (255);
  textSize (40);
  text ("SCORE:" + score, 100 , 50);
  LoadObjects(10);
  runObjects();
}

function playGameHard(){
  fill (255);
  textSize (40);
  text ("SCORE:" + score, 100 , 50);
  LoadObjects(40);
  runObjects();

}
function endGame(){ //
textSize(80);
fill (255,5, 5);
text ("GAME OVER", 150, 250);

}

function mouseClicked(){
  if (mouseX > 50 && mouseX < 250 && mouseY > 600 && mouseY < 630){// over easy button
    difficulty = 1;
  //  gameState =2;
  } else if (mouseX > 300 && mouseX < 500 && mouseY > 600 && mouseY < 630){
    difficulty = 2;
  //  gameState =2;
  }else if (mouseX > 550 && mouseX < 750 && mouseY > 600 && mouseY < 630){
    difficulty = 3;
  //  gameState =2;
  }
  return false;
}
function loadObjects(x){
  paddle = new Paddle (400, 500, 150, 40);
  for(var i = 0; i < x; i++){
    balls[i]=new Ball(random(width), 0 , 4,4, i);
  }
}

function runObjects(){
paddle.run();
for(var i = 0; i < balls.length; i++){
    balls[i].run();
}
}

function checkDifficulty(){

}
