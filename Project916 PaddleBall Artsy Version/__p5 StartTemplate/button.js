//  Ziggy Sheynin
//Project 916 PaddleGame
////  This is a comment
//  The setup function function is called once when your program begins

class Button{
  constructor(x, y, w, h, clr){
    this.loc = createVector(x,y);
    this.w = w;
    this.h = h;
    this.clr = clr;
    //this.txtSize = textSize();
  }

  run(){
    this.render();
    this.isClicked();
  }
  render(){
    fill(this.clr)
    rect(this.loc.x, this.loc.y, this.w, this.h);
    // textSize(this.txtSize);
  }

  isClicked(){
    if(mouseIsPressed&&
    mouseX > this.loc.x&&
    mouseX < this.loc.x+this.w &&
    mouseY > this.loc.y&&
    mouseY < this.loc.y +this.h){
      return true;
    }
  }
}
