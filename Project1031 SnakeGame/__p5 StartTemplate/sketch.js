//  Ziggy Sheynin
// 	Project 1031 SnakeGame
//  This is a comment
//  The setup function function is called once when your program begins


// function run(){
//   snake.update();
//   snake.render();
// }//end run
//

var snake, score, food, header_height;
var bodySegments = [];
function setup() {
  var cnv = createCanvas(800, 600);
  cnv.position((windowWidth-width)/2, 30);
  background(104, 212, 61);
  header_height = 800;
  newGame();
}//end setup

function draw(){
  background(104, 212, 61);
  snake.run();
  food.render();
  if (checkTangled === true){
    newGame();

  }
  if (getFood === true ){
    startNewRound();
  }
}// end draw

function newGame(){ //create snake and food objects
  frameRate(10);

  score = 0;
  snake = new Snake (random(50, 750), random(50, 750),30, color(23, 128, 51));
  food = new Food (random (300,500), random (300,500), color(122, 98, 109));


}//end newGame

function checkTangled(){
  return snake.tangled();
}//end checkTangled

function startNewRound(){

}//end startNewRound

function run(){
  snake.update();
  snake.render();
}//end run

function getFood() {

}//end getFood

function runObjects(){
  head.run();
}//end runObjects


function update(){
  if(keyCode === UP_ARROW){
    head.position(5,5);
  }
}//end update
// var cubeWidth
// var food;
// var direction;
// var snake = [];
// var column;
// var row;
// var snakeHead;
// var gameOver;
//
// function setup() {
//   var cnv = createCanvas(800, 800);
//   cnv.position((windowWidth-width)/2, 30);
//   background(179, 189, 179);
//   fill(200, 100, 150);
//   cubeWidth = 20;
//   column = width / cubeWidth;
//   row = height / cubeWidth;
//   snakeHead = new Snake(column, 600, color(170, 30, 100));
//   food = new Food(cubeWidth * int(random(0,800/cubeWidth)),cubeWidth * int(random(0,800/cubeWidth)), color(30));
// }// end set up
//
// function loadObjects(n){
//   for(i = 0; i < n; i++){
//
// }//end loadObjects
//
// function runObjects(){
//   snake.run();
//   for(var i = 0; i < snake.body.length; i++){
//     snake.body[i].run();
//   }
//   food.run();
// }// end runObjects
//
// //  The draw function is called @ 30 fps
// function draw(){
//   frameRate(15)
//     if(gameState === 1){
//       if(keyPressed === true){
//         gameState = 2
//       }
//     }else if (gameState === 2) {
//       background(5,5,5);
//       runObjects();
//     }else if (gameState === 3) {
//       textAlign(CENTER);
//       text("Game Over", 400, 400);
//     }
//
// }//end draw
//
//   if(gameOver === 1){
//     fill(200, 30, 30);
//     textSize(90);
//     text("Game Over", 100, 100);
//   }
//
//   function getFood(){
//   //need to compute row,col of snake.loc
//   //and food.loc,
//   //return (snake.row === food.row && snake.col === food.col)
//   }//end getFood
//
//   function newGame(){
//     score = 0;
//     //create the snake object in a random cell near the middle, create the
//     //food object, make sure it’s not overlapping the snake.
//     //Put it somewhere that’s not close to the middle.
//
//   }// end newGame
//
//   function startNewRound(){
//
//   }// end startNewRound
//
//   function checkTangled(){
//     //return snake.tangled();
//   }//end checkTangled
// }
