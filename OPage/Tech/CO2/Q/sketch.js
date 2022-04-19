
function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
}


function draw() {
  background(0);
  strokeWeight(0.4);
  stroke(90,184,145);

  
  var x=10
  

  for (x=200; x<=height; x+=70){
  fill(random(222),random(16),random(0));
    rotateX(frameCount * 0.020);
  rotateY(frameCount * 0.020);
  sphere(180);
   }
  

 
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);    //resizing the canvas to fill the screen.
}