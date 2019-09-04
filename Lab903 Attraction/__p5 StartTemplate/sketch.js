//Ziggy Sheynin
//Lab 903 Attraction
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []; //declares array
var mainBall;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

  loadBalls(50); //initializes array

}

//  The draw function is called @ 30 fps
function draw() { //what shows up on console
background(5,5,5,20);
  runBalls();

}//end draw

function loadBalls(x){ //loads balls into array
  mainBall = new Ball(random(width/2), random(height/2), random (-1,1), random(-1,1), -1);
  for(var i = 0; i < x; i++){
    balls[i]=new Ball(random(width), random(height), random (-1,1), random(-1,1), i);
  }//end for
}

function runBalls(){ //called from draw function
  mainBall.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
}//end for
}//end runBalls
