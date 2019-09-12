//Lab 911
//Ziggy Sheynin

var isColliding = true;
class Ball{
  constructor(x,y,dx,dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 0.1);
    this.clr = color(random(255),random(255),random(255));
    this.w = 15;
  }
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w)
  }
  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y
    }
    if (this.loc.x > paddle.loc.x && this.loc.x < paddle.loc.x + paddle.w && this.loc.y > paddle.loc.y && this.loc.y < paddle.loc.y + paddle.h) {
      this.vel.y = -this.vel.x
    }
  }
  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }
}//Class end
