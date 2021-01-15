var monkey , monkey_running;
var bananas, bananasImage, obstacles, obstaclesImage;
var FoodGroup, obstaclesroup;
var score;
var SurvivalTime=0;

function preload(){  
  monkey_running =                    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananasImage = loadImage("banana.png");
  obstaclesImage = loadImage("obstacle.png");
}

function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x); 

  obstacle=createSprite(400,330,20,20);
  obstacle.addImage(obstaclesImage);
  obstacle.velocityX=-4;
  obstacle.scale=0.1;
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
}

function draw() {
  background(255);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+SurvivalTime,100,50);
  
  bananas();
  obstacles();
  
  drawSprites();
}
function bananas(){
  if(frameCount%80===0){
    var bananas = createSprite(400, 250, 20, 20);
    bananas.addImage(bananasImage);
    bananas.y = Math.round(random(120,200));
    bananas.scale=0.1;
    bananas.velocityX=-4;
    bananas.Lifetime=100;
    
    bananaGroup.add(bananas);
    }
  }
function obstacles(){
  if(frameCount%300===0){
    var obstacles = createSprite(400,330,20,20);
    obstacles.addImage(obstaclesImage);
    obstacles.scale=0.1;
    obstacles.velocityX=-4;
    obstacles.Lifetime=100;
  }
}