//Lab 911
//Ziggy Sheynin

// var isColliding = true;
class Ball{
  constructor(x,y,dx,dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 0.5);
    this.clr = color(random(255),random(255),random(255));
    this.id = id;
  }
  run(){

      this.checkEdges();
      this.update();
      this.render();
      this.removeBall();
    //  this.bounce();

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

    this.vel.add(this.acc);
    this.loc.add(this.vel);

  }
  IsCollidingTop(){
    if (this.loc.x > paddle.loc.x &&
      this.loc.x < paddle.loc.x + paddle.w &&
      this.loc.y > paddle.loc.y ){
      return true;
    } else {
      return false;
    }
  }
  // IsCollidingBottom(){
  //   if(this.loc.y < paddle.loc.y + paddle.h) {
  //     return true;
  //   } else{
  //     return false;
  //   }

  //}
  removeBall(){
    if (this.IsCollidingTop() === true){
      // this.vel.x = -this.vel.x;
      // this.vel.y = -this.vel.y;
      balls.splice(0);
}
  }
  // bounce(){
  //   if (this.IsCollidingBottom() === true){
  //   this.vel.x = -this.vel.x;
  //     this.vel.y = -this.vel.y;
  //   }
  // }
}//Class end
