class Paddle {
  constructor(x,y){
     this.loc = createVector(x, y);
     this.w = 100
     this.h = 20
     this.clr = color(random(255),random(255),random(255));
   }//constructor end
   run(){
     this.render();
   }
   render(){
     fill(this.clr);
     rect(this.loc.x, this.loc.y, this.w, this.h);
   }
 }
