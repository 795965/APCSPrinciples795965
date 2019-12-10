//  Ziggy Sheynin
// 	Lab 1209 Ball Sort
//  This is a comment
//  The setup function function is called once when your program begins

var balls=[];

function setup(){
  var cnv=createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(5);
  loadBalls();

  for(var i=0; i<balls.length; i++){ //for loop traverse array
    balls[i].run();
  }
}//end set up

function draw(){ //runs at 30 fps
  bubblesort();
}

function update(){ //to animate
  for(var i=0; i<balls.length; i++){
    balls[i].set(i);
  }
  background(5);
  for(var i=0; i<balls.length; i++){
    balls[i].render();
  }
} //end update

function bubblesort(){ //checks red value to sort them
    for (var j=0; j<balls.length-1; j++){
      if(balls[j].red<balls[j+1].red){
        swap(balls, j, j+1);
        update();
      }
    }
  }



function loadBalls(){ //creates balls with values
  for (var x=0; x<20; x++){
    balls[x]= new Ball((40*x),400,40,40)
  }
}

function swap(list,a,b){
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}
