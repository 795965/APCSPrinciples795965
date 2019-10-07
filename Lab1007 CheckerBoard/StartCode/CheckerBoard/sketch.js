/* Ziggy Sheynin
//
**Lab 1007:CheckerBoard
**
**
*/

//  Global variables
// Declare squares[] as a global variable
var squares = [];
var id;
// put setup code here
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  // Create a function that loads the squares into an
  // array of square objects and call the function

  loadSquares();
  //  traverse array and run each square
  for(var i = 0; i < squares.length; i++){
    squares[i].render();
  }
}


function loadSquares(){
  for(var i = 0; i < 8; i++){
    for (var j = 0; j < 8; j++){
      squares[i] = new Square(i * 100, j*100, 100, 100, i);
    // if(id%2 === 0){
    //   this.clr = color(179, 0, 134);
    // }else {
    //   this.clr = color(0, 85, 128);
    // }
  }
  }
}
  //  create a loop that will push 64 squares into an array
  //  calculate the x and y position interms of the loop control variable
