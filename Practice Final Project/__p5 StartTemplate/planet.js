//Ziggy Sheynin
//Practice Final 1210
//
//


class Planet{
  constructor(x, y, dx, dy, id){
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.acc = createVector(0,0);
   this.clr = color(random(255), random(255), random(255));
   this.id = id;

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
    var planetDistance;
    if(this.id === 1){
     planetDistance = this.loc.dist(ships[i].loc);
   }
    if(planetDistance < 100){
       //move planet to random location
       this.loc.x = Math.floor(random(0,800));
       this.loc.y = Math.floor(random(0,800));
       this.render();

     }
    this.vel.limit(5);
     this.vel.add(this.acc);
   this.loc.add(this.vel);




  }

  render(){
    fill(this.clr);
      ellipse (this.loc.x, this.loc.y, 40, 40);
  }


}//  +++++++++++++++++++++++++++++++++++  End Ball Class
