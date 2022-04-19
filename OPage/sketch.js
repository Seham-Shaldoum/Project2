//Please, set the screen zoom to 67% if used on a laptop screen, this page was designed on a monitor screen. 
var sun;
var earth;
//Loading the Gifs
function preload(){
  sun = createImg("/sun.gif")
  earth = createImg("/earth.gif")
 
}
  
function setup() { 
createCanvas(windowWidth, windowHeight);               //sizing the canvas to fit the whole screen
} 

function draw() { 
  background(0);                         //background color
  sun.position(1580,0);                  //Positioning the Gifs.
  earth.position(10,600);

}

// resizing the canvas size to fit the available screen area.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
