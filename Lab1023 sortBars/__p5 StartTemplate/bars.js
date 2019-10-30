//  Ziggy Sheynin
// 	Lab 1023 Animate Sort
//  This is a comment
//  The setup function function is called once when your program begins

class Bar{
  constructor(x,y,w,h,c){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
    this.clr = c;
  }
run(){//allows me to call all methods in this class
  this.render();
}

render(){ //makes bars show up
  fill(this.clr);
  rect(this.loc.x,this.loc.y,this.w,this.h);
}

set(i){  //creates get-able variable for sketch class
  this.loc.x=i*barWidth;
}

} //+++++++++++++++end Bars
