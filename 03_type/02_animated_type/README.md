### Animating Text

### Variables used
```javascript
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
```

### Create Sliders
The sliders are created so you can control what you can do to the text 
```javascript
circleSlider = createSlider(1, 20, 6);
  circleSlider.class("circleSlider");
  circleSlider.mouseReleased(update);
  circleSlider.parent('radiusController');
  ```
### Setup text
I then had to create a graphic for the text to be drawn on to
```javascript
textImg = createGraphics(width, height);
  textImg.pixelDensity(1);
  textImg.background(255);
  textImg.textFont(font);
  textImg.textSize(fontSize);
  textImg.textAlign(CENTER);

  textImg.text(textTyped, width / 2, fontSize);
  textImg.loadPixels();
  ```
 ### Pixel Array
 I had to go through pixel array and check if pixels are there then draw lines
 ```javascript
 for (var x = 0; x < textImg.width; x += pointDensity) {
    for (var y = 0; y < textImg.height; y += pointDensity) {
  ```
 I had to calculate the index for the pixels array from x and y
 ```javascript
   var index = (x + y * textImg.width) * 4;
  ```
  
