var circles = 12;

var circleDiameter;
var circleRadius;

var rVal;
var gVal;
var bVal;

function setup(){
  createCanvas(500,500);
  colorMode(HSB, 350, 100, 100);
  frameRate(1);
  circleDiameter = width/circles;
  circleRadius = circleDiameter/2;

  rVal = 255;
  gVal = 0;
  bVal = 0;

}



function draw() {
var isShifted = false;

  var y = 0;
  while (y <= height) {
    var x;
    if (isShifted) {
      x = circleRadius;
   } else {
     x = 0;
   }

  while (x <= width) {
    stroke(color(rVal, gVal, bVal));
    fill(color(rVal, gVal, bVal));
   ellipse(x, y, circleDiameter, circleDiameter);
   //triangle(x, y, mouseX, mouseY, 86, 75);
    blendMode(BLEND);
    x = x + circleDiameter;
    }

    y = y + circleRadius;
    isShifted = !isShifted;

    rVal = (rVal + 9) % 256;
    gVal = (gVal + 7) % 256;
    bVal = (bVal + 13) % 256;
  }
}


function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');

}
