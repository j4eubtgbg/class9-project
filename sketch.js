//var a;
let e;
function setup() {
  createCanvas(400,400);
//a = createSprite(200,200,50,50);
e = createEdgeSprites();
//a.velocityX = 1;
//a.velocityY = 1;
//a.shapeColor = 'red';
}

function draw() 
{
  
if (keyIsDown(UP_ARROW)){
  background("red");
}

if (keyIsDown(DOWN_ARROW)){
background("blue");
}

if (keyIsDown(LEFT_ARROW)){
  background("green");
}

if (keyIsDown(RIGHT_ARROW)){
  background("yellow");
}
//a.bounceOff(e);

  drawSprites();
}