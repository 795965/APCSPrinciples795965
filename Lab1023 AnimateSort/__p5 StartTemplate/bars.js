//  Ziggy Sheynin
// 	Lab 1023 Animate Sort
//  This is a comment
//  The setup function function is called once when your program begins

class Bars{
  constructor(x,y,w,h,c){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
    this.clr= c;
  } //  End of bars constructor function

 run(){
  this.render();
  this.update();
 }

 render(){
  fill(this.clr);
  rect(this.loc.x,this.loc.y,this.w,this.h);
 }

 swap(list,a,b){
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
  }

 update(){
   // for (var i = 0; i <bars.length -1; i++){ //keeps track of length of sorted array
   //      var small = i; //int to find the smallest unsorted values
   //      for (var j = i+1; j <bars.length; j++){ //traverses nums
   //              if (bars[j] < bars[small]){ // if the value = small
   //                  small = j;
   //              }
   //      }
   //      this.swap(bars, i ,small);
   for (var i=bars.length-1;i>0; i--){
      for (var j=0; j<i; j++){
        if(bars[j].h>bars[j+1].h){
          this.swap(bars, j, j+1);
        }
      }
    }
    }







} //+++++++++++++++end Bars
