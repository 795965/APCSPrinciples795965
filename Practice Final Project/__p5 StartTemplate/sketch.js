//  Ziggy Sheynin
// 	Lab 1203 Ship and Planet
//  This is a comment
//  The setup function function is called once when your program begins
var ships = []; //declares array
var planet;
var i;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadObjects(20);

}


function draw() {
background(5,5,5,20);
runObjects();

}

function loadObjects(x){
      planet = new Planet (random(width/2), random(height/2), random (-.4,.4), random(-.4,.4), 1);
    for(var i = 0; i < x; i++){
        ships[i] = new Ship(random(width), random(height), random (-1,1), random(-1,1), 3);
      }
}

function runObjects(){
  for(var i = 0; i < ships.length; i++){
  ships[i].run();
}
  planet.run();
}
