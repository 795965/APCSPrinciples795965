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


// function update(){
//   if(keyCode === UP_ARROW){
//     head.position(5,5);
//   }
//}//end update
