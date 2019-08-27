//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins

var x, y;
var speedX, speedY;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  x = 200;
  y= 300;


}

//  The draw function is called @ 30 fps
function draw() {
  cnv = createCanvas(800, 800);
  x= x+2;
  fill(4, 5, 200);
  ellipse(x, x, 40, 40);

  fill(200, 4, 5);
  rect(x+100, y+100, 40, 40);

  fill(4, 5, 200);
  ellipse(x+x, y+y, 40, 40);

  fill(4, 5, 200);
  ellipse(600, 200, 40, 40);

  fill(4, 5, 200);
  ellipse(200, 600, 40, 40);

  fill(200, 4, 5);
  rect(760, 0, 40, 40);

  fill(200, 4, 5);
  rect(0, 760, 40, 40);

  fill(200, 4, 5);
  rect(760, 760, 40, 40);

  fill(200, 4, 5);
  rect(0, 0, 40, 40);
  fill(4, 5, 200);
ellipse(200, 200, 40, 40);

fill(200, 4, 5);
rect(400, 400, 40, 40);

fill(4, 5, 200);
ellipse(x, y, 40, 40);

fill(4, 5, 200);
ellipse(x+100, y+ 200, 40, 40);

fill(4, 5, 200);
ellipse(x, y, 40, 40);

fill(200, 4, 5);
rect(x+760, y+30, 40, 40);

fill(200, 4, 5);
rect(0, 760, 40, 40);

fill(200, 4, 5);
rect(760, 760, 40, 40);

fill(200, 4, 5);
rect(0, 0, 40, 40);




}
