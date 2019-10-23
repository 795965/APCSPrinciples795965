//  Ziggy Sheynin
// 	Lab 1023 Animate Sort
//  This is a comment
//  The setup function function is called once when your program begins

class Bars{
  constructor(x,y,w,h,c){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
    this.clr= c;
  } //  End of bars constructor function

 run(){
  this.render();
  this.update();

 }
 render(){
  fill(this.clr);
  rect(this.loc.x,this.loc.y,this.w,this.h);
 }

} //+++++++++++++++end Bars
