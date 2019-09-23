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
//  loadObjects(10);

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
  playGame(); //game screen
}
else if (gameState === 3){
  endGame(); //game over screen
}
} //end draw

function playGame(){
  fill (255);
  textSize (40);
  text ("SCORE:" + score, 100 , 50);
  runObjects();
} //end playGame

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

  //   //checks if user presses easy, medium or hard button
  checkDifficulty();
  //moves to next splash screen
  if(difficulty==='easy'||difficulty==='medium'||difficulty==='hard'){
    if(difficulty==='easy'){
      loadObjects(5);
    }
    if(difficulty==='medium'){
      loadObjects(10);
    }
    if(difficulty==='hard'){
      loadObjects(25);
    }
    gameState=2;
  //
  }
}//end startGame
  function loadObjects(x){
    paddle = new Paddle (400, 500, 150, 40);
    for(var i = 0; i < x; i++){
      balls[i]=new Ball(random(width), 0 , 4,4, i);
    }
  } //end loadObjects
  function checkDifficulty(){
    //if mouse touches easy
    if(mouseIsPressed&&
        mouseX>50&&
        mouseX<250&&
        mouseY>600&&
        mouseY<630){
          difficulty='easy'
        }
        //if mouse touches medium
    if(mouseIsPressed&&
        mouseX>300&&
        mouseX<500&&
        mouseY>600&&
        mouseY<630){
          difficulty='medium'
        }
        //if mouse touches hard
    if(mouseIsPressed&&
        mouseX>550&&
        mouseX<750&&
        mouseY>600&&
        mouseY<630){
          difficulty='hard'
        }

}// end checkDifficulty



function endGame(){ //
textSize(80);
fill (255,5, 5);
text ("GAME OVER", 150, 250);

}

function checkRed(){//checks to see if only red balls are left
  for(var i = 0; i < balls.length; i++){
    if(balls[i].getID()% 2 === 0){
      
    }
  }
}
function runObjects(){
paddle.run();
for(var i = 0; i < balls.length; i++){
    balls[i].run();
}
}
