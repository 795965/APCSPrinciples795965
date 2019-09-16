//Lab 911
//Ziggy Sheynin

// var isColliding = true;
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
      this.Bounce();

  }
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 50, 50)
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

  }
  update(){

    // this.vel.add(this.acc);
    this.loc.add(this.vel);

  }
  IsColliding(){
    if (this.loc.x > paddle.loc.x &&
      this.loc.x < paddle.loc.x + paddle.w &&
      this.loc.y > paddle.loc.y &&
      this.loc.y < paddle.loc.y + paddle.h) {
      return true;
    } else {
      return false;
    }
  }
  Bounce(){
    if (this.IsColliding() === true){
      this.vel.x = -this.vel.x;
      this.vel.y = -this.vel.y;
}
  }
}//Class end
