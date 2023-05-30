var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
path = loadImage("path.png")
boyImg = loadAnimation("Runner-1.png", "Runner-2.png")
pathImg= loadImage ("path.png");
 
}

function setup(){
  
  createCanvas(400,400);
 path = createSprite(200, 200, 50, 50) ;
 path.addImage("suelo", pathImg);

//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.scale=1.2;

boy = createSprite(180, 340, 20, 20);
boy.addAnimation("niño normal", boyImg)
boy.scale=0.08;
  

leftBoundary=createSprite(0,0,100,800);



rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
rightBoundary.visible=false;
leftBoundary.visible=false;
}

function draw() {
  background("blue");
  path.velocityY = 4;
  
  
  boy.x=World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
