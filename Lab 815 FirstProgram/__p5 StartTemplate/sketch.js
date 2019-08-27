//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  fill(4, 5, 200);
  ellipse(200, 200, 40, 40);

  fill(200, 4, 5);
  rect(400, 400, 40, 40);

  fill(4, 5, 200);
  ellipse(600, 600, 40, 40);

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

  fill(50, 60, 150);
  triangle(20, 50, 400, 40, 60, 60);



}
