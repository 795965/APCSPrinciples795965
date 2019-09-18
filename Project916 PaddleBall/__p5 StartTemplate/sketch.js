//  Ziggy Sheynin
//Project 916 PaddleGame
////  This is a comment
//  The setup function function is called once when your program begins
var balls = []; //ball array
var paddle; //global varibale for paddle
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  loadObjects(5);


}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  // runObjects();
  // var i = 0;
  // textSize(45);
  // text("Score: ", 100, 40, 70, 70);

  var gameState = 1; // creating splash screen
  if(gameState=== 1){
    startGame();
  } else if(gameState === 2){
    playGame();
  }else if(gameState === 3){
    endGame();
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
}
function playGame(){//starts the game after player chooses difficulty
  runObjects();
}
function loadObjects(n){

  paddle = new Paddle(400, 400, 150, 30);
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), 0, 15, 15);
  }
}//loads balls into array
function runObjects(){
  paddle.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }

}
  function endGame(){
    fill(255, 0, 0)
      textSize(100)
      text("GAME OVER", 100, 400)
    }
