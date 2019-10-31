//  Ziggy Sheynin
// 	Project 1031 SnakeGame
//  This is a comment
//  The setup function function is called once when your program begins

class Snake{
    constructor(x, y, dx, dy, c){
      this.loc=createVector(x,y);
      this.vel = createVector (dx, dy);
      this.clr = c;
      //this.bodyArr = bodyArr;
    } //end constructor

  update(){
      this.loc.add(this.vel);
  }//end update

  render(){
    fill(0, 255, 0);
    var row = Math.floor(this.loc.x/w);
    var col = Math.floor(this.loc.y/w);
    rect(row*w, col*w + header_height, 10, 10);
    //then do the same for each segment of the body in a for-loop grow function
    // add a segment to the body
  }//end render
} //++++++++++++++++ End Snake
