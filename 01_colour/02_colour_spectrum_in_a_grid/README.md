## Colour Spectrum in a Grid

### colorMode()
In this sketch, the HSB (Hue, Saturation, Brightness) colour scale is used. 

```javascript
colorMode(HSB, width, height, 100);
```

### map()
the mouse in the x and y direction is mapped to values 10 - 100

```javascript
tileCountX = floor(map(constrain(mouseX, 0, width), 0, width, 10, 100));
```

### nested for loop
The nested for loop draws the rectangles. In the first loop, the direction of y is handled. In the second loop the direction of x is handled. The number of rectangles that appear on screen is controlled by the mouse position.

```javascript
for (var gridY = 0; gridY < height; gridY += tileHeight) {
    for (var gridX = 0; gridX < width; gridX += tileWidth) {
      fill(gridX, height - gridY, 100);
      rect(gridX, gridY, tileWidth, tileHeight);
    }
  }
```
