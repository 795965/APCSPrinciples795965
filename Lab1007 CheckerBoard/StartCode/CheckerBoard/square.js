/* Ziggy Sheynin
//
**Lab 1007:CheckerBoard
//
/*
**  Square Constructor Function::
**  eettlin
**  Sept. 11, 2018
*/
  class Square{
      // Add parameters to your constructor function
      // Add instance variables to your constructor Function
      // What does a square need to know about itself??
 constructor(x,y,w,h,c){
   this.loc=createVector(x,y);
   this.w=w;
   this.h=h;
   this.clr= c;
 } //  End of Square constructor function

run(){
 this.render();
 this.update();

}
render(){
 fill(this.clr);
 rect(this.loc.x,this.loc.y,this.w,this.h);
}

}// end of Square class
