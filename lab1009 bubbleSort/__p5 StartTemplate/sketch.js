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

  console.log(list);
  list.bubbleSort();
}

//  The draw function is called @ 30 fps
function draw() {

}

function swap(list, a, b){
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;

}

function bubbleSort(list){
  // for all elements of list
  //     if list[i] > list[i+1]
  //        swap(list, i, i+1)
  //     end if
  //  end for
  //  return list
for(var j = list.length-1; j < 0; j--){
  for(var i = 0; i < list.length; i++){

      if(list[i] > list[i+1]){
        swap(list, i, i+1);
      }
    }
  }

  console.log(list);

}
