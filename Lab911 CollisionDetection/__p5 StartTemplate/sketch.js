//  Ziggy Sheynin
// 	Lab 911 Collision Detection
//  This is a comment
//  The setup function function is called once when your program begins
var balls = []
var paddle;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects(1);


}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  runObjects();
}
function loadObjects(n){
  paddle = new Paddle(400, 400, 150, 30);
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), 15, 15);
  }
}//loads balls into array
function runObjects(){
  paddle.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
