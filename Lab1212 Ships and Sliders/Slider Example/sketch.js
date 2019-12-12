

//  eettlin
//  Slider Example 1212

// Setup runs once at the start of your program

var sliderSize, sliderColor, sliderText;
function setup() {
  // put start code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);//  back ground color
  sliderText = createP("Here is a slider");
  sliderText.position(200, 370);
  sliderSize = createSlider(0, 400, 200);
  sliderSize.position(200, 400);
  sliderColor = createSlider(0, 255, 100);
  sliderColor.position(200, 450);
}


//  Draw runs 30 times each second
function draw() {
  // put drawing code here
  background(0, 0, 0);
  fill(sliderColor.value(), 0, 0);
  ellipse(width/2, height/2, sliderSize.value(), sliderSize.value());

}
