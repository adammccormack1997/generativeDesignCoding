## Complementary Colours

### colorMode()
the HSB (Hue, Saturation, Brightness) colour scale is used here. 

```javascript
colorMode(HSB, 360, 100, 100);
```

### background()
The background function is used to colour the background of the canvas.The colour changes as the mouse is moves in the y direction

```javascript
background(mouseY / 2, 100, 100);
```

### fill()
The fill function fills colour elements.'360 - mouseY / 2, 100, 100' is passed into this function to display another colour when the mouse position changes

```javascript
fill(360 - mouseY / 2, 100, 100);
```
