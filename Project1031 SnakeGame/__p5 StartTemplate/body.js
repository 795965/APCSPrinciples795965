class Body{
  constructor(x,y){
    this.x = x
    this.y = y
  }

  render(){
    fill(100,250,100)
    rect(this.x, this.y, 20, 20)
    }
}
