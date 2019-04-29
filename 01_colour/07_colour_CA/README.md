### Colour CA

### Setting amount of circles
I had to decide how many circles I wanted I wanted in a row. I decided to opt for 12 circles so I created a variable called circles and let it equal to 12.
```javascript
var circles = 12;
```

### Circle Diameter
I then created a variable to store the value of the circle's diameter. I named this circleDiameter. I then let circleDiameter equal to the width divided by the circle's .This is how I calculated the diameter.
```javascript
circleDiameter = width/circles;
circleRadius = circleDiameter/2;
```

### while loop
To create a row of circles would be a pain if I was to create an ellipse function for each circle. To make life easier I used a while loop to create a row of circles for me. Here we can see the value of x is increased by circleDiameter after every iteration of the loop. A flag is used as it keeps track of which rows are being shifted. To differentiate between rows you can flip the flag at the bottom of the y while loop. This sets the flag to its opposite after every row is created. So after one line is true, the next will be false. This is done by using the ! operator to flip from false to true.
```javascript
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
  ```
### Colour Changing
To change the colour between rows and to create a gradient effect I had to set a starting colour and increment the R, G and B values each time through the loop. To start you declare 3 variables at the top called rVal, gVal and bVal. I set the initial values as 0 except for the rVal which is set to 255. I then had to increment these values at the bottom of the y-loop. Here, the rVal is being incremented by 9, the gVal is incremented by 7 and the bVal is incremented by 13.
```javascript
 rVal = (rVal + 9) % 256;
    gVal = (gVal + 7) % 256;
    bVal = (bVal + 13) % 256;
 ```
 
    
  
