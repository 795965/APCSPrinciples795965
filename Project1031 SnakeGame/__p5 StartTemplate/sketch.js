//  Ziggy Sheynin
// 	Project 1031 SnakeGame
//  This is a comment
//  The setup function function is called once when your program begins

var w, header_height, snake, score;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(150, 40, 70);
  fill(200, 30, 150);

   w = cnv.width/height;
  header_height = 800;
  newGame();
}

//  The draw function is called @ 30 fps
function draw() {
  snake.render();
//  food.run();
  if(checkTangled === true){
    newGame();
  }
  if(getFood === true){
    startNewRound();
  }

//draw the score and header w/in y=0, and header_height area

} // end draw

function checkTangled(){
  return snake.tangled();
}//end checkTangled

function startNewRound(){

}// end startNewRound

function newGame(){
  score = 0;
  //create the snake object in a random cell near the middle, create the
  //food object, make sure it’s not overlapping the snake.
  //Put it somewhere that’s not close to the middle.
  snake = new Snake(random(0, 800), random(0, 800), 10, 10, color(50));

}// end newGame

function keyPressed(){
  if(keyCode === UP_ARROW){
    //MOVE SNAKE ONE SQUARE UP
  }
  if(keyCode === DOWN_ARROW){
    //MOVE SNAKE ONE SQUARE DOWN
  }
  if(keyCode === LEFT_ARROW){
    //MOVE SNAKE ONE SQUARE LEFT
  }
  if(keyCode === RIGHT_ARROW){
    //MOVE SNAKE ONE SQUARE RIGHT
  }

}//end keyPressed

function run(){
  snake.update();
  snake.render();
}//end run

function getFood(){
//need to compute row,col of snake.loc
//and food.loc,
//return (snake.row === food.row && snake.col === food.col)
}//end getFood
