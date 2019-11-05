//  Ziggy Sheynin
// 	Project 1031 SnakeGame
//  This is a comment
//  The setup function function is called once when your program begins

class Snake{
  constructor(x,y, c){
    this.loc = createVector(x,y);
    this.w = cubeWidth;
    this.clr = c;
  }//end constructor

  run(){
    this.render();
    this.update();
    this.checkEdges();
  }//end run

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.w);
  }// end render

  update(){
    if(keyCode === RIGHT_ARROW){
      if(direction === 2){
        // gameOver = 1;
      }
      this.loc.x = this.loc.x + this.w;
      direction = 1;
    }
    if(keyCode === LEFT_ARROW){
      if(direction === 1){
        // gameOver = 1;
      }
      this.loc.x = this.loc.x - this.w;
      direction = 2;
    }
    if(keyCode === UP_ARROW){
      if(direction === 4){
        // gameOver = 1;
      }
      this.loc.y = this.loc.y - this.w;
      direction = 3;
    }
    if(keyCode === DOWN_ARROW){
      if(direction === 3){
        // gameOver = 1;
      }
      this.loc.y = this.loc.y + this.w;
      direction = 4;
    }
  }//end update

  checkEdges(){
    if(this.loc.x > width - this.w || (this.loc.x < 0) || (this.loc.y > height - this.w) || (this.loc.y < 0)){
      gameOver = 1;
    }
  }//end checkEdges

  tangled(){
    //for loop checking each segment in the segment array
    for(i = 0; i < this.bodySegments.length; i++){
      //if stament checking if the locations are equal to each other
      if(this.loc.x == this.bodySegments[i].x && this.loc.y == this.bodySegments[i].y){
        console.log("Game Over");
      }
    }
  }//end tangled

} //++++++++++++++++ End Snake
