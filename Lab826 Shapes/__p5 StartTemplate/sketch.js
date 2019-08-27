//  Ziggy Sheynin
// 	Lab 826
//  This is a comment
//  The setup function function is called once when your program begins
var shapes = []; //declares array

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

  loadShapes(100,200); //initializes array

}

//  The draw function is called @ 30 fps
function draw() { //what shows up on console
background(5,5,5);
  runShapes();

}//end draw

function loadShapes(x,y,z){ //loads balls into array
  for(var i = 0; i < x; i++){
    shapes[i]=new Ball(random(width), random(height), random (-2,2), random(-2,2));
  }//end for
  for(var i = x; i < x+y; i++){
    shapes[i]=new Rect(random(width), random(height), random (-2,2), random(-2,2));
  }//end for
//  for(var i = x+y; i < x+y+z; i++){
    //balls[i]=new Triangle();
//  }//end for
}//end loadBall

function runShapes(){ //called from draw function
  for(var i = 0; i < shapes.length; i++){
    shapes[i].run();
}//end for
}//end runBalls
