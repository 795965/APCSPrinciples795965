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
    //  Add parameters to your constructor function
    //  Add instance variables to your constructor Function
    //What does a square need to know about itself??
    constructor(w, h, x, y, id){
      this.w = 0;
      this.h = 0;
      this.x = 100;
      this.y = 100;
      //this.clr = color(179, 0, 134);
      this.id = id;
    } //  End of Square constructor function

    run(){
      this.checkID();
      this.render();
    }

    render(){
  //  fill();
      rect(this.w, this.h, this.x, this.y);
    }

    checkID(){
      if(id%2 === 0){
        this.clr = color(179, 0, 134);
      }else if(id%2 === 1){
        this.clr = color(0, 85, 128);
      }
    }
  }// end of Square class
