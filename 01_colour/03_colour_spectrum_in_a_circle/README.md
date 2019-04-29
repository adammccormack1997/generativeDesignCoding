## Colour Spectrum in a Circle

### colorMode()
In this sketch, the HSB (Hue, Saturation, Brightness) colour scale is used. 

```javascript
colorMode(HSB, 360, width, height);
```

### Triangle Fan Shape
Setting the shape to be drawn to 'TRIANGLE_FAN'. The first vertex is the center of the shape.
The next vertices are the local points.

```javascript
beginShape(TRIANGLE_FAN);
vertex(width / 2, height / 2);
```
