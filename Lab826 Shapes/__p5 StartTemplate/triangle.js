class Triangle {
  constructor(x, y, dx, dy){
    this.x1 = x1;
    this.y1 = y1;
    // this.x2 = x2;
    // this.y2 = y2;
    // this.x2 = x2;
    // this.y2 = y2;
    this.dx = dx;
    this.dy = dy;
    this.clr = color(random(255), random(255), random(255));

  }

  run(){
    this.checkedges();
    this.update();
    this.render();
  }

  checkedges(){
    if(this.x1 < 0 || this.x2 < 0 || this.x3 < 0){
      this.dx = -this.dx;
    }
    if(this.x1 > width || this.x2 > width || this.x3 > width){
      this.dx = -this.dx;
    }
    if(this.y1 < 0 || this.y2 < 0 || this.y3 < 0){
      this.dy = -this.dy;
    }
    if(this.y1 > height || this.y3 > height || this.y3 > height){
      this.dy = -this.dy;
    }

  }
  update(){


    this.x1 = this.x1 + this.dx;
    this.x2 = this.x2 + this.dx;
    this.x3 = this.x3 + this.dx;

    if()
    this.y = this.y +this.dy;

  }

  render(){
    fill(this.clr);
    triangle(this.x1, this.y1, this.x1+30, this.y1, this.x1+15, this.y1-30);

  }
}
