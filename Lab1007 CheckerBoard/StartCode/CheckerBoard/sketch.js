/* Ziggy Sheynin
//
**Lab 1007:CheckerBoard
**
**
*/


//  Global variables
// Declare squares[] as a global variable
var squares[];


// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  // Create a function that loads the squares into an
  // array of square objects and call the function

  loadSquares();
  //  traverse array and run each square

}



function loadSquares(){
  //  create a square object and push it into the squares array
var square1 = new Square (100, 100, x+100, y+100, color());

  var rowNum = 0;
  for(var i = 0; i < 64; i++){
  //get  location properties
    var x =     //  Choose x in terms of i
    var y =     //  Choose y in terms of i
    //Create your location vector
    var loc = createVector(x, y);

  //  create a loop that will push 64 squares into an array
  //  calculate the x and y position interms of the loop control variable

}
