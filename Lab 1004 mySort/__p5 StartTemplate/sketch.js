//  Ziggy Sheynin
// 	Lab 1004 mySort
//  This is a comment
//  The setup function function is called once when your program begins
var list= [2, 3, 4, 1, 6, 4, 2]; //inititialize array as a global variable

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
}


function zigSort(list){
  //Idea:
  //Split list into smaller units, sort them
  //Put them back together, split them again
  //after they've been split into groups of 2 they should be sorted

  var half = list.length / 2; //splits list in half

    while (half > 0) { //for the first half
        for (i = half; i < list.length; i++) {
            var j = i;
            var temp = list[i];

            while (j >= half && list[j-half] > temp) {
                list[j] = list[j-half];
                j = j - half;
            }

            list[j] = temp;
        }

        if (half == 2) {
            half = 1;
        } else {
            half = parseInt(half*5 / 11); //found parseInt on w3 schools, turns string into integers
        }
    }
  return list;

}

//have to type zigSort(list) into console for it to work
