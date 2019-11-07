//  Ziggy Sheynin
// 	Project 1031 SnakeGame
//  This is a comment
//  The setup function function is called once when your program begins

class Snake{
  constructor(x, y,w, c){
    this.head=createVector(x,y);
    this.vel = createVector(0,0);
    this.w = 30;
    this.clr = c;
    this.body =[];
  }// end constructor

  run(){
    this.update();
    this.render();
  } //end run

  loadSegment(){
    //loads new body square
    this.body.push(createVector(0,0));
  }// end loadSegment

  update(){
    //adds segment to the snake
    if(this.head.x === food.food.x &&
       this.head.y === food.food.y){
         this.loadSegment();
       }
    // updates the body, to make it longer
    for(var i = 0; i < this.body.length; i++){
      this.body[0].x = this.head.x;
      this.body[0].y = this.head.y;
      this.body[i].x = this.body[i-1].x;
      this.body[i].y = this.body[i-1].y;
    }
    // updates the head- gives it new location
    this.head.add(this.vel);


  }//end update

  render(){
    fill(this.clr);
    var row = Math.floor(this.loc.x/this.w);
    var col = Math.floor(this.loc.y/this.w);
    rect(row*this.w, col*this.w + header_height, 10, 10);
    rect(this.head.x, this.head.y, this.w, this.w );
    for(var i = 1; i <= bodySegments.length -1; i++){
      rect(bodySegments[i].x, bodySegments[i].y, this.w, this.w);
    }
  }//end render

  tangled(){
    //for loop checking each segment in the segment array
    for(i = 0; i < bodySegments.length; i++){
      //if stament checking if the locations are equal to each other
      if(this.head.x == bodySegments[i].x && this.head.y == bodySegments[i].y){
        console.log("Game Over");
      }
    }
  }

   keyPressed(){
    if(keyCode === UP_ARROW){
      this.head.y = this.head.y - this.w;
    }
    if(keyCode === DOWN_ARROW){
      this.head.y = this.head.y + this.w;
    }
    if(keyCode === LEFT_ARROW){
      this.head.x = this.head.x - this.w;
    }
    if(keyCode === RIGHT_ARROW){
      this.head.x = this.head.x + this.w;
    }

  }//end keyPressed

} //++++++++++++++++ End Snake
