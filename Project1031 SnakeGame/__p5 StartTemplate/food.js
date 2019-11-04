//  Ziggy Sheynin
// 	Project 1031 SnakeGame
//  This is a comment
//  The setup function function is called once when your program begins

class Food{
  constructor(x, y, c){
    this.loc=createVector(x,y);
    this.clr = c;
    this.loc= loc;
  }// end constructor

  update(){


  }//end update

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, 10, 10);

  }//end render

}//++++++++++++++++++++ end food
