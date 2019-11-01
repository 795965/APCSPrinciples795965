//  Ziggy Sheynin
// 	Project 1031 SnakeGame
//  This is a comment
//  The setup function function is called once when your program begins

class Food{
  constructor(x, y, c){
    this.loc=createVector(x,y);
    this.clr = c;
  }// end constructor

  update(){

  }//end update

  render(){
    fill(this.clr);

  }//end render
}//++++++++++++++++++++ end food
