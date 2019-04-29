//tileCountX and tileCountY refer to the amount of rectangles drawn
var tileCountX = 2;
var tileCountY = 2;


function setup() {

  // Creates the canvas for the animation
  var canvas = createCanvas(windowWidth, windowHeight);

  // setting the colour mode of the canvas
  // using the 'rectMode' function to draw rectangles
  colorMode(HSB, width, height, 100);
  noCursor();
  noStroke();
}


function draw() {

  // Time passed shows  the amount of time passed in seconds
  timePassed = millis() / 1000;

  //the number of tiles drawn is calculated by the location of the mouse
  //the mouse in the x and y direction is mapped to values 10 - 100
  tileCountX = floor(map(constrain(mouseX, 0, width), 0, width, 10, 100));
  tileCountY = floor(map(constrain(mouseY, 0, height), 0, height, 10, 100));

  //the width and height of each rectangle
  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;

  //nested for loop draws the rectangles
  for (var gridY = 0; gridY < height; gridY += tileHeight) {
    for (var gridX = 0; gridX < width; gridX += tileWidth) {
      fill(gridX, height - gridY, 100);
      rect(gridX, gridY, tileWidth, tileHeight);
    }
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(canvas, '02_colour_spectrum_in_a_grid', 'png');
}
