 var bg,bgImg,diver,diverImg,diver1Img,ground;
var obstacles,obstaclesGroup;
var gameState
function preload(){
  bgImg=loadImage("underwater.png");
  diverImg=loadAnimation("diver1.png","diver2.png");
  diver1Img=loadImage("diver1.png");
}

function setup(){
  createCanvas(1000,600)
  
  bg=createSprite(500,300);
  bg.addImage("bg",bgImg);
  bg.x = bg.width /2;
  bg.scale=0.5;

  diver=createSprite(800,400,50,50);
  diver.addImage("diver",diver1Img)
  
  ground=createSprite(550,550,1000,50);
  
  obstaclesGroup=new Group();

}

function draw(){
  background("blue");
  createEdgeSprites();
  if(keyWentDown("space")&& diver.y >= 100) {
        diver.velocityY = -12;
        diver.addAnimation("diver1",diverImg)
        diver.changeAnimation("diver1");
    }
    
    //add gravity
    diver.velocityY = diver.velocityY +0.5             
  
  
 if(diver.isTouching(ground)){
   diver .velocityY=-8;
   diver.velocityY=diver.velocityY+0.5
   
 } 
    
  
  ground.y=550;   
  ground.visible=false;
  
  if(diver.y>560){
    diver.y=400;
     
  }
  if(diver.y<0){
    diver.y=400;
    diver.x=800;
  }
  drawSprites();
  
  
}

