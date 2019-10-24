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
      bars[i].run();
    }

}

//  The draw function is called @ 30 fps
function draw() {
  //frameRate(10);
  for(var i=0; i<bars.length; i++){
     bars[i].run();
   }
}

function loadBars(){
  for (var i=0; i<40; i++){
    var w = int(random(1,40));
    bars[i]= new Bars(25*i,800-(25*w),25,(25*w), color(130, 0, 130));
 }
}
