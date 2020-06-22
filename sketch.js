var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";
  fixedRect.velocityX = -3;
  movingRect = createSprite(300, 200, 70, 70);
  movingRect.shapeColor = "orange";
  movingRect.velocityX = 3;
}

function draw() {
  background(0);  
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;
/*
  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 
    && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 
    && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2) {
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
*/
if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 
  && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2) {
   fixedRect.velocityX = fixedRect.velocityX*-1;
   movingRect.velocityX = movingRect.velocityX*-1; 
  }

  if(movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 
    && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2) {
     fixedRect.velocityY = fixedRect.velocityY*-1;
     movingRect.velocityY = movingRect.velocityY*-1; 
   } 
  drawSprites();
}