var circleRes = 10;
var angle = 360/circleRes;
var radius;
var myStroke;

function setup(){
  createCanvas(500,500);
  angleMode(DEGREES);

}

function draw(){
  radius = map(mouseX,width/2,width,1,150);
  circleRes = int(map(mouseY,0,height,2,80));
  myStroke = int(map(mouseY,0,height,8,1));


  angle = 360/circleRes;
  background(255);
  strokeWeight(myStroke);
  translate(width/2, height/2);

  //constrain(radius = mouseX - width/2);
//  radius = map(mouseX,0,width,1,150);
  for(var i=0; i<circleRes; i++){
  var posx = cos(angle*i)*abs(radius);
  var posy = sin(angle*i)*abs(radius);
  line(0,0,posx, posy);
}

}
