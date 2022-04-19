// defining the variables 
let tco;
let calc;
var slider;
function setup() {
 createCanvas(windowWidth, windowHeight);    
img = loadImage('co2.PNG')           //importing the img of the graph
 
  background(0);
  //creating the slider with max and min based on the research
  slider = createSlider(0, 31020000, 276000,8);  
  tco = 65590192;                 //total CO2 value calculated based on the research
 var button = createButton('(9 to 1,008)SopoNova® parabolic trough collectors');      //creating button

 //postioning the button and slider.
  button.position(320, 420);
  slider.position(300,450)
  slider.size(400, 10);
}

function draw() {

fill("black");
//creating texts and positioning it on the page
textWrap(WORD);
const TXT2 = 'MicroCSP Effect On Reducing CO2 Emissions';  //inserting text2
  textSize(40);
  fill(203,77,11)
textWrap(WORD);
text(TXT2, 5, 300, 10);
  let xValue = tco;
  //calculating the new total Co2 value
  xValue = tco-slider.value();
  //creating a legend to display the new value
  let legend = ' Total UIC CO2 emissions for the year 2020 in kg= ' + nfc(xValue) + '\n ';  
  //legend text color,size and position.
  stroke(0);
  strokeWeight(10);
  fill(255,255,255);   
  textSize(30);
  text(legend, 200, 230);
image(img, 1100, 170);  //img position.

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);    //resizing the canvas to fill the screen.
}
