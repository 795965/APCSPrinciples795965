//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x,y;
var speedX, speedY;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  x = 200;
  y = 200;



}

//  The draw function is called @ 30 fps
function draw() {
  x= x+4;
  y= y+ 3;



  fill(130,45,60);
  ellipse(x, y, 70, 70);

  fill(89, 65, 132);
  ellipse(x, y+300, 50, 50);

  fill(79, 213, 174);
  ellipse(x*3, y*2, 60, 60);





}
