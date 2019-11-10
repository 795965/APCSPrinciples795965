//  Ziggy Sheynin
// 	Project 1031 SnakeGame
//  This is a comment
//  The setup function function is called once when your program begins




var score, header_height, snake, difficulty;
var gameState = 1;
var h = 10;
var food = [];
var btnEasy, btnMed, btnHard, btnInstructions, btnBTMI, btnBTME, btnReplay;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(217, 189, 124);
  header_height = 800;
  loadObjects(2);
  newButton();
}

function draw(){
    if (gameState ===1){
      startGame(); //start screen
    }else if (gameState === 2){
      playGame(); //game screen
    }else if (gameState === 3){
      instructionsText();
    }else if (gameState === 4){ //game over screen
      endGame();
  }
}

function newButton(){
  btnEasy = new Button(50, 450, 200, 200, color(78, 219, 18) );
  btnMed = new Button(300, 450, 200, 200, color (250,250,7));
  btnHard = new Button(550, 450, 200, 200, color(250, 0, 0));
}

function startGame(){
//change look of this
  textSize(80);

  fill(98,78,200);
  textAlign(RIGHT);
  textFont('Times New Roman')
  text ("Snake Game", 600, 200); //title
  textAlign(CENTER);

  btnEasy.render(); //draws buttons
  btnMed.render();
  btnHard.render();

  textSize (45); //text for buttons
  fill(255);
  text ("EASY", 55, 525, 200, 200);
  text ("HARD", 560, 525, 200, 200);
  text ("MEDIUM", 305, 530, 200, 200);

    checkDifficulty(); // checks which difficulty is chosen
    if (difficulty === 'easy' || difficulty === 'medium'|| difficulty === 'hard'){
      if (difficulty === 'easy'){
        loadObjects(2);
      }else if (difficulty === 'medium'){
        loadObjects (5);
      }else if (difficulty === 'hard'){
        loadObjects (7);
      }
      gameState = 2; // play game
    }
}

function playGame(){
  frameRate(10);
  background(100, 200, 100);
  runObjects();
}

function loadObjects(n){
    snake = new Snake (Math.floor(random(10, 26)*30),Math.floor(random (10, 26)*30),30, color(200, 200, 68));
  for (var j = 0; j < n; j++){
    food[j] = new Food (Math.floor(random(0, 26)*30), Math.floor(random (0, 26)*30), color(200, 30, 170));
    }
}

function runObjects(){
    snake.run();

  for(var i = 0; i< food.length; i++){
    food[i].run();
  }
}
  // snake.run();
  // food.render();
  // if (checkTangled === true){
  //   newGame();
  // }
  // if (getFood === true ){
  //   startNewRound();
  //}
//}// end draw

function newGame(){ //create snake and food objects
}
function checkTangled(){
  return snake.tangled();
}
function startNewRound(){

}


function getFood() {

}

function checkDifficulty(){ //check which difficulty button is isClicked
  if (btnEasy.isClicked()=== true){
     difficulty = 'easy';
   }
 if (btnMed.isClicked()===true){
    difficulty = 'medium';
  } if (btnHard.isClicked()=== true){
    difficulty = 'hard';
  }
}
