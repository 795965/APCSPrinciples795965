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


function findMedian(list){
  if(list.length % 2 === 0){ //if the array is even
    var half = list.length / 2;
    var twoMedian = list[half] + list[half+1];
    var medianEven = twoMedian/2;
    console.log(medianEven);
  }
  else if(list.length % 2 === 1){//is the aaray is odd
      var half = list.length /2;
      var medianOdd = list[half];
      console.log(medianOdd);
  }
}


function insertionSort(list){
  for (var i = 1; i < list.length; i++){
              for (var j = i; j > 0; j--){
                  if (list[j] < list[j-1]) { // if the current value is less, swap
                      swap(list, j , j-1);
                  }
              }
          }

  console.log(list);
}

function swap(list, a, b){ //swapping code
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
