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
   var w = random(1,800);
  for (var i=0; i<30; i++){
    var j=int(random(i,30));
      bars[i]= new Bars(i, 30*i,800-(30*i), i, random(1,400), color(20, 45, 153));
 }
}
