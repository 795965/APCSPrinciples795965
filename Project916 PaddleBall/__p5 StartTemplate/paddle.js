class Paddle {
  constructor(x,y, w, h){
     this.loc = createVector(x, y);
     this.w = w;
     this.h = h;
     this.clr = color(random(255),random(255),random(255));
   }//constructor end
   run(){
     this.render();
     this.update();

   }
   render(){
     fill(this.clr);
     rect(this.loc.x, this.loc.y, this.w, this.h);
   }
   update(){
    var mouseLoc = createVector(mouseX, mouseY);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09); //lerp = p5 js funtion for object following mouse
    //makes paddle move with mouse
   }

 }
