//TESTER


class test(
var cnv;
let d;
let g;

function setup() {
  cnv = createCanvas(100, 100);
  cnv.mouseClicked(changeGray); // attach listener for
  // activity on canvas only
  d = 10;
  g = 100;
}

function draw() {
  background(g);
  ellipse(width / 2, height / 2, d, d);
}

// this function fires after the mouse has been
// clicked anywhere
function mouseClicked() {
  d = d + 10;
}

// this function fires after the mouse has been
// clicked on canvas
function changeGray() {
  g = random(0, 255);
}
}
