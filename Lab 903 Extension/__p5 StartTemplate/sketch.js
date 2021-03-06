//Ziggy Sheynin
//Lab 903 Attraction
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []; //declares array
var mainBall;
var mainBall2;
var mainBall3;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5, 20);

  loadBalls(50);

}


function draw() {
background(5,5,5, 20);
  runBalls();
}

function loadBalls(x){
  mainBall = new Ball(random(width/2), random(height/2), random (-.4,.4), random(-.4,.4), -1);
  mainBall2 = new Ball(400, 400, random (-.4,.4), random(-.4,.4), 0);
  mainBall3 = new Ball(30, 30, random (-.4,.4), random(-.4,.4), -0.5);

  for(var i = 0; i < x; i++){
    balls[i]=new Ball(random(width), random(height), random (-1,1), random(-1,1), i+2);
  }
}

function runBalls(){
  mainBall.run();
  mainBall2.run();
  mainBall3.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
}
}
