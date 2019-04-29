let font;
let textImg;
let tileResolution = 40;
let tileWidth;

function preload() {
  font = loadFont('data/FreeSansBold.ttf');
}

function setup() {
  createCanvas(500, 500);
  setUpText();
  tileWidth = Math.floor(width/tileResolution);
  // image(textImg, 0, 0);
}

function draw() {
  background(0);
  for (let y = 0; y < height; y+=tileWidth) {
    for(let x = 0; x < width; x+=tileWidth) {

      let index = (x + y * textImg.width) * 4;
      if(textImg.pixels[index] < 128) {
        fill(250, 180, 0);
        ellipse(x, y, tileWidth, tileWidth);
      }

    }
  }
}

function setUpText() {
  textImg = createGraphics(500, 500);
  textImg.pixelDensity(1);
  textImg.background(225);
  textImg.textFont(font);
  textImg.textSize(200);
  textImg.text("TIM", 50, 100, 50, 50);
  textImg.loadPixels();
}
