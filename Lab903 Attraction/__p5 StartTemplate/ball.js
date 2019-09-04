//Ziggy Sheynin
//Lab 828 Vectors

class Ball {
  constructor(x, y, dx, dy, id){
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.acc = createVector(0,0.5);
   this.clr = color(random(255), random(255), random(255));
   this.id= id;
  }

  run(){
    this.checkedges();
    this.update();
    this.render();
  }

  checkedges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
      this.loc.y = height -2;
    }

  }
  update(){
    if(this.id >= 0){
     distToMainBall = this.loc.dist(mainBall.loc);
     if(distToMainBall < 250){
       //add attraction
       this.acc = p5.Vector.sub(mainBall.loc, this.loc);
       this.acc.normalize();
       this.acc.mult(0.1);
     }
     if(distToMainBall < 150){
       this.acc = p5.Vector.sub(mainBall.loc, this.loc);
       this.acc.normalize();
       this.acc.mult(0.5);
     }
    }
    this.vel.add(this.acc);
    this.loc.add(this.vel);


  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 10, 10);
  }
}
