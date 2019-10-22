//  Ziggy Sheynin
// 	Lab 1021 All Sorting Routines
//  This is a comment
//  The setup function function is called once when your program begin
var list = [];


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  for(var x = 0; x < 1000; x++){ //loads list with random integers from 1 to 100
    list[x] = Math.floor(random(1, 100));
  }

}

//  The draw function is called @ 30 fps
function draw() {

}

function selectionSort(list){
  shuffle(list, true); //randomizes array
  var compares = 0;
  var swaps = 0;
  var t1 = millis();
  for (var i  = 0; i <list.length -1; i++){ //keeps track of length of sorted array
           var small = i; //int to find the smallest unsorted values
           for (var j = i+1; j <list.length; j++){ //traverses nums
               if (list[j] < list[small]){ // if the value = small
                   small = j;
                   compares = compares +1;
               }
           }
           swap(list, i ,small);
           swaps++
       }
  var t2 = millis();
  console.log(list);
  console.log("Selection Sort Compares =" + compares);
  console.log("Selection Sort Swaps =" + swaps);
  console.log("Selection Sort Time =" + (t2-t1)/1000);

}

function insertionSort(list){
  shuffle(list, true); //randomizes array
  var compares = 0;
  var swaps = 0;
  var t3 = millis();
  for (var i = 1; i < list.length; i++){
          for (var j = i; j > 0; j--){
              if (list[j] < list[j-1]) { // if the current value is less, swap
                    swap(list, j , j-1);
                    swaps++;
                    compares++;
                  }
              }
          }
  var t4 = millis();
  console.log(list);
  console.log("Insertion Sort Compares =" + compares);
  console.log("Insertion Sort Swaps =" + swaps);
  console.log("Insertion Sort Time =" + (t4-t3)/1000);


}

function bubbleSort(list){
  shuffle(list, true); //randomizes array
  var compares = 0;
  var swaps = 0;
  var t5 = millis();
  for(var j = list.length; j > 0 ; j --){
      for (var i = 0 ; i < list.length; i ++){

          if (list[i+1] < list [i]){
            var temp = list[i];
            list[i] = list[i+1];
            list[i+1] = temp;
            swaps++;
            compares++;
          }
        }
      }
      var t6 = millis();
      console.log(list);
      console.log("Bubble Sort Compares =" + compares);
      console.log("Bubble Sort Swaps =" + swaps);
      console.log("Bubble Sort Time =" + (t6-t5)/1000);

    }




function swap(list, a, b){ //swapping code
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
