//  Ziggy Sheynin
// 	Project 1031 SnakeGame
//  This is a comment
//  The setup function function is called once when your program begins

class Snake{
  constructor(headx, heady, c){
    this.loc=createVector(x,y);
    this.clr = c;
    this.loc= loc;
    this.bodySegments = [];
    this.bodySegments.push(createVector(0,0));
  }// end constructor

  run(){
    this.update();
    this.render();
  } //end run

  update(){
    this.bodySegments[0].x = this.loc.x;
    this.bodySegments[0].y = this.loc.y;

    for(var i = this.bodySegments.length - 1; i >= 1; i--){
        this.bodySegments[i].x = this.segments[i - 1].x;
        this.bodySegments[i].y = this.segments[i - 1].y;
      }

 this.loc.add(this.vel);
 this.loc.x = constrain(this.loc.x, 0, width-w);
 this.loc.y = constrain(this.loc.y, 0, width-w);

 //once snake eats food then add a segment and move food location
 if(this.loc.dist(food.loc) === 0){
   this.bodySegments.push(createVector(0,0));
   for(i = 0; i < this.bodySegments.length; i++){
     if(food.loc != this.bodySegments[i].loc){
       food.loc = createVector(width / 2 - Math.floor(Math.random()*16-8)*w, height / 2+Math.floor(Math.random()*12-6)*w);
     }
   }
 }

  }//end update

  render(){
    fill(this.clr);
    var row = Math.floor(this.loc.x/w);
    var col = Math.floor(this.loc.y/w);
    rect(row*w, col*w + header_height, 10, 10);
    rect(this.loc.x, this.loc.y, w, w);
    for(var i = 1; <= this.bodySegments.length -1; i++){
      rect(this.bodySegments[i].x, this.bodySegments[i].y, w, w);
    }
  }//end render

  tangled(){
    //for loop checking each segment in the segment array
    for(i = 0; i < this.bodySegments.length; i++){
      //if stament checking if the locations are equal to each other
      if(this.loc.x == this.bodySegments[i].x && this.loc.y == this.bodySegments[i].y){
        console.log("Game Over");
      }
    }
  }
} //++++++++++++++++ End Snake
