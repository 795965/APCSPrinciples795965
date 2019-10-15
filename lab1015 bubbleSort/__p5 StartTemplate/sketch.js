//  Ziggy Sheynin
// 	Lab 1015 BubbleSort
//  This is a comment
//  The setup function function is called once when your program begins

var list = [];


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  for(var x = 0; x < 10; x++){
    list[x] = Math.floor(random(1, 100));
  }

}

//  The draw function is called @ 30 fps
function draw() {

}

function bubbleSort(list){


  for(var j = list.length; j > 0 ; j --){
for (var i = 0 ; i < list.length; i ++){


if (list[i+1] < list [i]){
  var temp = list[i];
  list[i] = list[i+1];
  list[i+1] = temp;
}

  }

}
console.log(list);

}
