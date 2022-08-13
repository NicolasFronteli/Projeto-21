var spaceImg, space;
var starImg, star;
var rocket, rocketImg;
var gameState = "play";
var score;
var gameOver, gameOverImg;
var obstacleImg, obstacle;


function preload(){
  spaceImg = loadImage("background.png");
  rocketImg = loadImage("foguete.png");
  gameOverImg = loadImage("gameOver.png")
  starImg = loadImage("estrela.png");
  obstacleImg = loadImage("obstaculo.png");
}

function setup() {
  createCanvas(600,450);
  
  space = createSprite(300,450);
  space.addImage(spaceImg);
  space.velocityY = 2;
  space.scale = 1.5;
  
  rocket = createSprite(300,350,10,10);
  rocket.scale = 0.4;
  rocket.addImage(rocketImg);

  rocket.setCollider("circle",- 10,- 60,80); 
  rocket.debug = true

  gameOver = createSprite(300,225);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.5;

  score = 0;
}


function draw() {
  background(0);
  text("Score: "+ score, 500,50);

  if (gameState === "play") {
    

    if(space.y > 300){
      space.y = 200
    } 
    
    rocket.x = World.mouseX;

    score = score + Math.round(getFrameRate()/60);

    gameOver.visible = false;
      

    if(keyDown("space")){
  
        rocket.velocityY = -10;

      }
  
      if(star.isTouching(rocket)){
        rocket.destroy();
        gameState = "end"
      }
    
    }

  
  if (gameState === "end"){
    space.velocityY = 0;
    gameOver.visible = true;

    }
    drawSprites();

    var select_sprites = Math.round(random(1,2));

  if (frameCount % 80 == 0) {
    if (select_sprites == 1){
      spawnObstacles();
    } 
    else if (select_sprites == 2){
     spawnStars();
    }
  } 

}   

function spawnStars(){
  star = createSprite(random(50, 350,),40,10,10);
  star.addImage(starImg);
  star.velocityY = 4;
  star.lifetime = 400;
  star.scale = 0.1;
}

function spawnObstacles(){
  obstacle = createSprite(random(50, 350,),40,10,10);
  obstacle.addImage(obstacleImg);
  obstacle.velocityY = 4;
  obstacle.lifetime = 400;
  obstacle.scale = 0.1;

}
  
