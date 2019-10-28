//  Ziggy Sheynin
// 	Lab 1023 sortBars
//  This is a comment
//  The setup function function is called once when your program begins
var bars=[];
var barWidth = 25;

//put setup code here
function setup(){
  var cnv=createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(5, 5, 5);

  loadBars(); //puts bars into bars array
  frameRate(10); //slows down the speed
  for(var i=0; i<bars.length; i++){
    bars[i].run(); //to print the array
  }
}

function draw(){ //calls method at 30 fps
  bubbleSort();
  //selectionSort();
}

function update(){ //to allow for animation
  for(var i=0; i<bars.length; i++){
    bars[i].set(i);
  }
  background(5, 5, 5);
  for(var i=0; i<bars.length; i++){
    bars[i].run();
  }
}

function bubbleSort(){ //sorting routine
    for (var j=0; j<bars.length-1; j++){
      if(bars[j].h>bars[j+1].h){
        swap(bars, j, j+1);
        update();
      }
    }
  }



function loadBars(){ //puts bars into array
  for (var x=0; x<40; x++){
    var w=int(random(1,40));
    bars[x]= new Bar(barWidth*x,800-(barWidth*w),barWidth,(barWidth*w))
  }
}

function swap(list,a,b){ //swapping algorithm
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}
