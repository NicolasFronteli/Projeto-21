var spaceImg, space;
var starImg, starGroup;
var rocket, rocketImg;
var gameState = "play"
var score;


function preload(){
  spaceImg = loadImage("background.png");
  starImg = loadImage("estrela.png");
  rocketImg = loadImage("foguete.png");
}

function setup() {
  createCanvas(windowWidht, windowHeight);
  space = createSprite(widht/2, height/2);
  space.addImage(spaceImg);
  space.velocityY = 5;
  
  starGroup = new Group();
  
  rocket = createSprite(widht/2 , height -20, 20, 20);
  rocket.scale = 0.8;
  rocket.addImage(rocketImg);

  score = 0;
}


function draw() {
 
  
  if (gameState === "play") {

    if(space.y > 400){
      space.y = 300
    } 
    background(0);


    score = score + Math.round(getFrameRate()/60);
    
    rocket.x = World.mouseX;
      

    if(keyDown("space")){
  
        rocket.velocityY = -10;

      }
  
    
      spawnStar();


    if(star.isTouching(rocket)){
      rocket.destroy();
      gameState = "end"
    }

  }
  
  if (gameState === "end"){
    stroke("red");
    textSize(30);
    text("Game Over", 230,250)
    space.velocityY = 0;

    }
    drawSprites();
}
    
  
 



function spawnStar(){
  if (frameCount % 240 === 0) {
    var star = createSprite(200, -50);
    star.x = Math.round(random(120,400));
    star.addImage(starImg);
    star.velocityY = 1;
    star.lifetime = 600;
    starGroup.add(star);
  }
}