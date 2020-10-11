
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var obstacleGroup
var survivaltime
var ground
var banana, bananaGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,400);
 monkey = createSprite(80, 315, 20, 20);
 monkey.addAnimation("moving", monkey_running);
 monkey.scale=0.1;
  
 ground = createSprite(400,350, 900,10);
 ground.velocityX=-4;
 ground.x=ground.width/2

  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  survivaltime=0;
}


function draw() {
 background("brown");
if(ground.x < 0){
  ground.x=ground.width/2;
}

monkey.collide(ground);
  
if(keyDown("space")&& monkey.y >= 310) {
        monkey.velocityY = -17;
    }
  
monkey.velocityY = monkey.velocityY + 0.8
survivaltime = survivaltime + Math.round(getFrameRate()/60);
  
spawnBananas();
  
spawnObstacles();

drawSprites();
text("survivaltime: " + survivaltime, 200,50);

}


 function spawnBananas () {
   if (frameCount % 80 === 0) {
     banana = createSprite(400,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3; 
    
     //assign lifetime to the variable
    banana.lifetime = 150;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
 }

function spawnObstacles () {
  if (frameCount % 300 === 0){
    obstacle = createSprite(400,165,10,40);
    obstacle.addImage(obstacleImage);
   obstacle.velocityX = -6;
   obstacle.y=320; 
    obstacle.scale = 0.2;
    obstacle.lifetime = 700;
   

    obstacleGroup.add(obstacle);
 }

}



