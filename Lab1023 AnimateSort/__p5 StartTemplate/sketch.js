//  Ziggy Sheynin
// 	Lab 1023 Animate Sort
//  This is a comment
//  The setup function function is called once when your program begins
var bars = [];
var numBars, barWidth;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  barWidth = 10;
  numBars = width/barWidth;

  loadBars(numBars);
  runBars();
  shuffle(bars, true);
  selectSort();
  }


//  The draw function is called @ 30 fps
function draw() {
  selectSort(bars);
  //bubbleSort();
}

function loadBars(){ //function to create bars
  for (var i=0; i<40; i++){
    var barHeight = Math.floor(random(1,height));
    var barWidth = (width/40);
    bars[i]= new Bars(barWidth*i,height-barHeight,barWidth,barHeight, color(130, 0, 130));
 }
}

function  update(){
  for(var i=0; i<bars.length; i++){
    bars[i].set(i);
  }
  background(0);
  for (var i =0; i<bars.length; i++){
    bars[i].run();
  }
}

function runBars(){ //actually puts bars on the screen
  for(var i = 0; i < bars.length; i++){
    bars[i].run();
  }
}


function swap(bars,a,b){ //swapping routine
  var temp = bars[a].loc.x;
  bars[a].loc.x = bars[b].loc.x;
  bars[b].loc.x = temp;
}


function selectSort(){ //sorting routine
 for (var i = 0; i <bars.length -1; i++){ //keeps track of length of sorted array
      var small = i; //var to find the smallest unsorted values
      for (var j = i+1; j <bars.length; j++){ //traverses nums
              if (bars[j].getHeight() > bars[small].getHeight()){ // if the value = small
                  j = small;
              }
      }
      swap(bars, i, small);
      update();
  }
  background(5, 5, 5);
  frameRate(3);
  runBars();
}
