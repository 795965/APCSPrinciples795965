//  Ziggy Sheynin
// 	Project 1031 SnakeGame
//  This is a comment
//  The setup function function is called once when your program begins

class Food{
  constructor(x, y, c){
      this.loc = createVector(x,y);
      this.clr = c;
      this.w = 30;
      //this.w = cubeWidth;
    }//end constructor

    run(){
      this.render();
      this.tangled();
    } //end run

    render(){
      fill(this.clr);
      rect(this.loc.x, this.loc.y, this.w, this.w);
    }//end render

    tangled(){
      if(snakeHead.loc.x === this.loc.x && snakeHead.loc.y === this.loc.y){
        this.loc.x = this.cubeWidth * int(random(0,800/this.cubeWidth));
        this.loc.y = this.cubeWidth * int(random(0,800/this.cubeWidth));
        loadObjects(1);
      }
    }//end tangled

}//++++++++++++++++++++ end food
