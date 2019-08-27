//  Ziggy Sheynin
// 	Lab 823
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []; //declares array

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBalls(20); //initializes array

}

//  The draw function is called @ 30 fps
function draw() { //what shows up on console
  runBalls();

}//end draw

function loadBalls(n){ //loads balls into array
  for(var i = 0; i < n; i++){
    balls[i]=new Ball(random(width), random(height), random (-2,2), random(-2,2));
  }//end for
}//end loadBall

function runBalls(){ //called from draw function
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
}//end for
}//end runBalls
