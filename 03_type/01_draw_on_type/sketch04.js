var textTyped = "XYZ";

var font;
var fontSize = 250;
var textImg;
var pointDensity = 10;

var circleRadius = 5;
let radiusSlider;

let checkbox;
let filled = 1;

//let img;

function preload() {
  font = loadFont('data/FreeSansBold.ttf');
  //img = loadImage('assets/grad.jpeg');
}

function setup() {
  let canvas = createCanvas(750, 500);
  canvas.parent('canvasHolder');
      radiusSlider = createSlider(1, 20, circleRadius);
      radiusSlider.parent('radiusController')
      radiusSlider.mouseReleased(update);

      checkbox = createCheckbox('fill', true);
      checkbox.parent('fillController');
      checkbox.changed(update);

  setUpText();
}


function setUpText() {
  textImg = createGraphics(width, height);
  textImg.pixelDensity(1);
  textImg.background(225);
  textImg.textFont(font);
  textImg.textSize(fontSize);
  textImg.text(textTyped, 100, fontSize + 50);
  textImg.loadPixels();
}

function draw() {
  background(255);
  fill(0);
  noStroke();


  for (var y = 0; y < height; y+=pointDensity) {
    for(let x = 0; x < width; x+=pointDensity) {

      var index = (x + y * textImg.width) * 4;
      var r = textImg .pixels[index];

      if(r < 128) {
        if(filled){
        fill(255,0,0);
        noStroke();
        ellipse(x, y, circleRadius, circleRadius);
      }
      else{
        noFill();
        stroke(0);
        ellipse(x, y, circleRadius, circleRadius);
      }
      }

    }
  }
}


function update(){
  circleRadius = radiusSlider.value();
  if (checkbox.checked()== 1){
    filled = 1;
  }
  else {
    filled = 0;
  }
}
