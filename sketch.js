
var fixedRect, movingRect;
var object1,object2,object3,object4;



function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
object1=createSprite(100,100,50,50);
object1.shapeColor="orange"
object2=createSprite(200,100,50,50);
object2.shapeColor="orange"
object3=createSprite(300,100,50,50);
object3.shapeColor="orange"
object4=createSprite(400,100,50,50);
object4.shapeColor="orange"


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
   if(isTouching(movingRect,object1)){
    movingRect.shapeColor = "red";
    object2.shapeColor ="red";
   }
   else{
 movingRect.shapeColor = "blue";
 object2.shapeColor = "blue";
   }

 
  drawSprites();
}
function isTouching(a,b){
  if (a.x - b.x < b.width/2 + a.width/2
    && b.x - a.x <b.width/2 + a.width/2
    && a.y - b.y < b.height/2 + a.height/2
    && b.y - a.y < b.height/2 + a.height/2) {
 




  return true;
}
else {
 
  return false;
}
}
