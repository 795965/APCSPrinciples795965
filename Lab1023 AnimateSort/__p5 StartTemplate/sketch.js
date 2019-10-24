//  Ziggy Sheynin
// 	Lab 1023 Animate Sort
//  This is a comment
//  The setup function function is called once when your program begins
var bars = [];
var barWidth, barHeight;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  loadBars();

}

//  The draw function is called @ 30 fps
function draw() {
  for(var i=0; i<bars.length; i++){
     bars[i].run();
     SelectSort(bars);
   }
   frameRate(10);

}

function loadBars(){
  for (var i=0; i<40; i++){
    var barHeight = Math.floor(random(1,height));
    var barWidth = (width/40);
    bars[i]= new Bars(barWidth*i,height-barHeight,barWidth,barHeight, color(130, 0, 130));
 }
}

function update(){
  for(var i = 0; i < bars.length; i++){
    bars[i].set(i);
  }
  // background(235);
 for(var i=0; i<bars.length; i++){
   bars[i].run();
 }

}
function SelectSort(){
 for (var i = 0; i <bars.length -1; i++){ //keeps track of length of sorted array
      var small = i; //var to find the smallest unsorted values
      for (var j = i+1; j <bars.length; j++){ //traverses nums
              if (bars[j] < bars[small]){ // if the value = small
                  small = j;
              }
      }
      swap(bars, i, small);
      update();
  }
}

function swap(list,a,b){
   var temp=list[a];
   list[a]=list[b];
   list[b]=temp;
   }
