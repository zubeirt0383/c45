var bg,bgImg,zombies,zombieImg,bullets,shootSound,bulletImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg")
  bulletImg = loadImage("assets/bulletImg.png")
  shootSound = loadSound("assets/GunShot.mp3")
}

function setup() {
  zombies = createGroup();
  bullets = createGroup();
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 
  zombies.setVelocityXEach(-1);
  bullets.setVelocityXEach(2);
  spawnZombies();



  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0 || keyDown("W")){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0||keyDown("S")){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
  shoot();
  shootSound.play();
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}

function spawnZombies(){
  if(frameCount %60 == 0){
    var sprite = createSprite(windowWidth,random(windowHeight/4+200,windowHeight),10,50);
    sprite.addImage(zombieImg);
    sprite.scale=0.15;
    zombies.add(sprite);
    
   
  }
}
function shoot(){
    var sprite = createSprite(player.x+50,player.y-25,10,10);
    sprite.addImage(bulletImg);
    sprite.scale=0.1;
    bullets.add(sprite);
}
