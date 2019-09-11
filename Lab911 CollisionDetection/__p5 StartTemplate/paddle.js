class Paddle {
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.clr = color(random(255), random(255), random(255));

  }

  run(){
    this.checkedges();
    this.update();
    this.render();
  }

  checkedges(){
    if(this.x < 0){
      this.w = -this.w;
    }
    if(this.x > width){
      this.w = -this.w;
    }
    if(this.y < 0){
      this.dy = -this.dy;
    }
    if(this.y > height){
      this.dy = -this.dy;
    }

  }
  update(){
    this.x = this.x + this.w;
    this.y = this.y +this.h;

  }

  render(){
    fill(this.clr);
    rect(this.x, this.y, this.w, this.h);
  }
}
