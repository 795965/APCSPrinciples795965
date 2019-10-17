//  Ziggy Sheynin
// 	Lab 1017 Insertion Sort
//  This is a comment
//  The setup function function is called once when your program begins

var list = [];


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  for(var x = 0; x < 10; x++){ //loads list with random integers from 1 to 100
    list[x] = Math.floor(random(1, 100));
  }

}

//  The draw function is called @ 30 fps
function draw() {

}

function insertionSort(list){

  for(var i = 1; i > list.length ; i++){
      for (var j = i-1; j < list.length-1; j++){
          while(j >= 0 && list[j] > temp){
            list[j+1] = list[j];
            j = j-1;
          }
          list[j+1] = temp;
        // if (list[i+1] < list [i]){ //swapping routine
        //     var temp = list[i];
        //     list[i] = list[i+1];
        //     list[i+1] = temp;
        //   }


        }
      }
      console.log(list);

}
