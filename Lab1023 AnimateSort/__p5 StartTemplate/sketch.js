//  Ziggy Sheynin
// 	Lab 1023 Animate Sort
//  This is a comment
//  The setup function function is called once when your program begins
var bars = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  loadBars();
    for(var i=0;i<bars.length;i++){
      bars[i].render();
    }

}

//  The draw function is called @ 30 fps
function draw() {

}

function loadBars(){
  for (var x = 0; x < 80; x++){
    bars[x] = new Bars (10+x, 10+x, 20, random(0, 30), color(255));

  }
}
