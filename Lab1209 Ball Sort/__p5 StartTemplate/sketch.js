//  Ziggy Sheynin
// 	Lab 1209 Ball Sort
//  This is a comment
//  The setup function function is called once when your program begins
var balls=[];

//put setup code here
function setup(){
  var cnv=createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(5, 5, 5);

  loadBalls(20); //puts balls into balls array
  frameRate(10); //slows down the speed
//  for(var i=0; i<balls.length; i++){
  //  balls[i].run(); //to print the array
//  }
}

function draw(){ //calls method at 30 fps
  bubbleSort();
  //runBalls();
}

function update(){ //to allow for animation
  for(var i=0; i<20; i++){
    balls[i].set(i);
  //  balls[i].getRed(red);
  }
  background(5, 5, 5);
  for(var i=0; i<balls.length; i++){
    balls[i].run();
  }

}

function runBalls(){
  for(var i = 0; i < 20; i++){
    balls[i].run();
  }
}

function loadBalls(n){ //puts balls into array
  for (var x=0; x<n; x++){
  //  var red = random(0,255);
    balls[x]= new Ball(x*40+20,400,30,30, color(red, 0, 0),red);
  }
}

function bubbleSort(){ //sorting routine
    for (var j=0; j<20; j++){
      if(balls[j].getRed() > balls[j+1].getRed()){ //change to check for red color
        swap(balls, j, j+1);
        update();
      }
   }
  }


function swap(list,a,b){ //swapping algorithm
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}
