//  Ziggy Sheynin
// 	Project 1031 SnakeGame
//  This is a comment
//  The setup function function is called once when your program begins


// function run(){
//   snake.update();
//   snake.render();
// }//end run
//


var cubeWidth
var food;
var direction;
var snake = [];
var column;
var row;
var snakeHead;
var gameOver;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(179, 189, 179);
  fill(200, 100, 150);
  cubeWidth = 20;
  column = width / cubeWidth;
  row = height / cubeWidth;
  snakeHead = new Snake(column, 600, color(170, 30, 100));
  food = new Food(cubeWidth * int(random(0,800/cubeWidth)),cubeWidth * int(random(0,800/cubeWidth)), color(30));
}// end set up

function loadObjects(n){
  for(i = 0; i < n; i++){

}//end loadObjects

//  The draw function is called @ 30 fps
function draw(){
  frameRate(10);
  if(gameOver === 0){
    background(5,5,5);
    snakeHead.run();
    food.run();
  }
}//end draw

  if(gameOver === 1){
    fill(200, 30, 30);
    textSize(90);
    text("Game Over", 100, 100);
  }

  function getFood(){
  //need to compute row,col of snake.loc
  //and food.loc,
  //return (snake.row === food.row && snake.col === food.col)
  }//end getFood

  function newGame(){
    score = 0;
    //create the snake object in a random cell near the middle, create the
    //food object, make sure it’s not overlapping the snake.
    //Put it somewhere that’s not close to the middle.

  }// end newGame

  function startNewRound(){

  }// end startNewRound

  function checkTangled(){
    //return snake.tangled();
  }//end checkTangled
}
