var n = 0;
var c = 4;

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    //colorMode(HSB); 
    background(0);
}

function draw() {
    var a = n * 137.5;
    var r = c * sqrt(n);
    
    var x = r * cos(a) + width/2;
    var y = r * sin(a) + height/2;
    
    //fill(n % 256, 155, 200);
    fill(46*n%256, 92*n%256, 23*n%256)
    noStroke();
    ellipse(x, y, 4, 4);
    
    n++;
}