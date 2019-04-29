'use strict';

var font;

var textTyped = 'CC4';
var drawMode = 1;
var fontSize = 250;
var padding = 10;
var nOff = 0;
var pointDensity = 8;

var counterDir = true;
var circleSize = 6;

var colors;
var opacity;

var animate = false;

var stepAmount = 100;
var counter = 0;

var circleSlider;
var densitySlider;
var opacity;
var opacitySlider;
var fontSizeSlider;
var randomSlider;
var inputBox;

var checkBox;
var animateBox;

var paths;
var textImg;

var thisWidth = $("#holder").width();

function preload() {
  font = loadFont('data/FreeSansBold.ttf');

}

function setup() {
  var canvas = createCanvas(thisWidth, thisWidth);
  canvas.parent('holder');
  frameRate(25);
  rectMode(CENTER);
setupText();
//colour array
   colors = [color(0, 153, 153), color(178, 255, 102), color(178, 102, 20)];
   pixelDensity(1);



  circleSlider = createSlider(1, 20, 6);
  circleSlider.class("circleSlider");
  circleSlider.mouseReleased(update);
  circleSlider.parent('radiusController');

  densitySlider = createSlider(1, 20, 6);
  densitySlider.class("densitySlider");
  densitySlider.mouseReleased(update);
  densitySlider.parent('densityController');

  fontSizeSlider = createSlider(100, 800, 200);
  fontSizeSlider.class("fontSizeSlider");
  fontSizeSlider.mouseReleased(update);
  fontSizeSlider.parent('fontSizeController');

  randomSlider = createSlider(0, 200, 100);
  randomSlider.class("randomSlider");
  randomSlider.mouseReleased(update);
  randomSlider.parent('randomController');

  opacitySlider = createSlider(10, 100, 100);
  opacitySlider.class("opacitySlider");
  opacitySlider.mouseReleased(update);
  opacitySlider.parent('opacityController');

  inputBox = createInput("CC4");
  inputBox.class("inputBox");
  inputBox.input(update);
  inputBox.parent('inputBoxController');

  checkBox = createCheckbox('Filled', true);
  checkBox.class("checkBox");
  checkBox.changed(update);
  checkBox.parent('checkBoxController');

  animateBox = createCheckbox('Animate', false);
  animateBox.class("animateBox");
  animateBox.changed(update);
  animateBox.parent('animateBoxController');

}

function setupText() {
  //creates a graphic for text to be drawn on to
  textImg = createGraphics(width, height);
  textImg.pixelDensity(1);
  textImg.background(255);
  textImg.textFont(font);
  textImg.textSize(fontSize);
  textImg.textAlign(CENTER);

  textImg.text(textTyped, width / 2, fontSize);
  textImg.loadPixels();
}

function draw() {
  background(192, opacity);
  noFill();
  noStroke();

  nOff++;

//go through pixel array and check if pixels are there then draw lines
  for (var x = 0; x < textImg.width; x += pointDensity) {
    for (var y = 0; y < textImg.height; y += pointDensity) {
      // Calculates the index for the pixels array from x and y
      var index = (x + y * textImg.width) * 4;
      // Gets red value from image
      var r = textImg.pixels[index];
      //if r value id less than 128 then set draw mode to 1
      if (r < 128) {
        if (drawMode == 1){
          strokeWeight(1);

          var noiseFac = map(mouseX, 0, width, 0, 1);
          var lengthFac = map(mouseY, 0, height, 0.01, 1);

          //noise values between 0 and 1
          var num = noise((x + nOff) * noiseFac, y * noiseFac);
          if (num < 0.6) {
            stroke(colors[0]);
          } else if (num < 0.7) {
            stroke(colors[1]);
          } else {
            stroke(colors[2]);
          }

          push();
          translate(x, y);
          //make it rotate a different amount every frameCount
          rotate(radians(frameCount));
          line(0, 0, fontSize * lengthFac, 0);
          pop();
        }

        if (drawMode == 2){
          stroke(0, 0, 0);
          strokeWeight(1);
          noStroke();
          push();
          translate(x, y);

          var num = noise((x + nOff) / 10, y / 10);

          if (num < 0.6) {
            fill(colors[0]);
          } else if (num < 0.7) {
            fill(colors[1]);
          } else {
            fill(colors[2]);
          }

          //
          var w = noise((x - nOff) / 10, (y + nOff * 0.1) / 10) * 20;
          var h = noise((x - nOff) / 10, (y + nOff * 0.1) / 10) * 10;
          rect(0, 0, w, h);
          pop();
        }

        if (drawMode == 3){
          stroke(0, 0, 0);
          strokeWeight(1);
          noStroke();

          var num = random(1);

          if (num < 0.6) {
            fill(colors[0]);
          } else if (num < 0.7) {
            fill(colors[1]);
          } else {
            fill(colors[2]);
          }

          push();
          beginShape();
          for (var i = 0; i < 3; i++){
            var ox = (noise((i * 1000 + x - nOff) / 30, (i * 3000 + y + nOff) / 30) - 0.5) * pointDensity * 6;
            var oy = (noise((i * 2000 + x - nOff) / 30, (i * 4000 + y + nOff) / 30) - 0.5) * pointDensity * 6;
            vertex(x + ox, y + oy);
          }
          endShape(CLOSE);
          pop();
        }

        if (drawMode == 4){
          stroke(colors[0]);
          strokeWeight(3);

          point(x - 10, y - 10);
          point(x, y);
          point(x + 10, y + 10);

          for (var i = 0; i < 5; i++){
            if (i == 1) {
              stroke(colors[1]);
            } else if (i == 3) {
              stroke(colors[2]);
            }

            if (i % 2 == 0){
              var ox = noise((10000 + i * 100 + x - nOff) / 10) * 10;
              var oy = noise((20000 + i * 100 + x - nOff) / 10) * 10;
              point(x + ox, y + oy);
            } else {
              var ox = noise((30000 + i * 100 + x - nOff) / 10) * 10;
              var oy = noise((40000 + i * 100 + x - nOff) / 10) * 10;
              point(x - ox, y - oy);
            }
          }
        }


      }
    }
  }

}


function update(){
  //updates slider values
  circleSize = circleSlider.value();
  pointDensity = densitySlider.value();
  fontSize = fontSizeSlider.value();
  opacity = opacitySlider.value();
  //randomAmount = randomSlider.value();
  textTyped = inputBox.value();
  console.log(textTyped)
//checking to see if check/animate box has been checked
  if (checkBox.checked() == true) {
      //filled = true;
  }
  else {
      filled = false;
  }

  if (animateBox.checked() == true) {
      animate = true;
  }
  else {
      animate = false;


      counter = 0;
  }

    setupText();
}
function keyReleased() {
   if (key == 's' || key == 'S') img.save(timestamp()+"_##.png");
   // if (key == 'p' || key == 'P') savePDF = true;

 //change draw modes
   if (key == '1') drawMode = 1;
   if (key == '2') drawMode = 2;
   if (key == '3') drawMode = 3;
   if (key == '4') drawMode = 4;
}


function keyTyped() {
  if (keyCode >= 32){
    textTyped += key;
    setupText();
  }
}
