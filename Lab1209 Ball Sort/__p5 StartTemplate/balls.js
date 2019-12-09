//  Ziggy Sheynin
// 	Lab 1209 Ball Sort
//  This is a comment
//  The setup function function is called once when your program begins

class Ball{
  constructor(x,y,w,h,clr,red){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
    this.clr = clr;
    this.red = red;

  }
run(){//allows me to call all methods in this class
  this.render();
}

render(){ //makes balls show up
  fill(this.red, 0,0);
  red = random(0,800);
  ellipse(this.loc.x,this.loc.y,this.w,this.h);
}

getRed(){  //creates get-able variable for sketch class
  //this.loc.x=i*barWidth;
   return this.red;
}

set(i){
  this.x = i*40+20;
}
} //+++++++++++++++end Bars
