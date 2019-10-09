//  Ziggy Sheynin
// 	Lab 1009 BubbleSort
//  This is a comment
//  The setup function function is called once when your program begins

var list = [7, 8, 9, 2, 1,3, 3];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


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
