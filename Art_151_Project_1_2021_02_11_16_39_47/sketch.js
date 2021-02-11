//creating variables for radius of circles
var radius1
var radius2
//creating vars for angles
var angle1=0
var angle2=0
var prevX
var prevY
var angle1diameter
var angle2diameter

//timer for the background


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)  
  background(30)
  radius1=random(200,200)
  radius2=random(200,200)
  angle1diameter= random(0.1,20) 
  angle2diameter= random(0.1,20)
}

function draw() {
  
  
  
  //background(30)
  translate(width/2,height/2)
  stroke(255)
 
  
  for(var i=0;i<20;i++){
    var x1= radius1 * cos(angle1)
  var y1= radius2 *sin(angle1)
  
  var x2= x1+ radius2 * cos(angle2)
  var y2= y1 + radius2 *sin(angle2)
  
   //adding colors
    var red=map(sin(frameCount), -1,1,100,200);
    var green=map(cos(frameCount) ,-1,1,100,200);
    var blue=map(sin(frameCount) ,-1,1,200,100);
    
    stroke(red,green,blue)
    point(x1,y1)
    line(prevX,prevY,x2,y2)
    
    prevX= x2
    prevY= y2
  
    angle1 +=  angle1diameter
    angle2 += angle2diameter
    
  }
  

  
}