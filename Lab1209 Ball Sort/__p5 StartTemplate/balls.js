//  Ziggy Sheynin
// 	Lab 1209 Ball Sort
//  This is a comment
//  The setup function function is called once when your program begins

class Ball{
  constructor(x,y,w,h,red,g,b){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
    this.red=random(255);
    this.g=0;
    this.b=0;
  }

render(){
  fill(this.red,this.g,this.b);
  ellipse(this.loc.x+20,this.loc.y,this.w,this.h);
}

set(i){
  this.loc.x=i*40;
}

}// +++++++++ end ball class
