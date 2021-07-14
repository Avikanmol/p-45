var canvas
var ground , groundImage
var mario,marioImage;

function preload(){
    groundImage=loadImage("ground.png")
    marioImage=loadAnimation("mario1.png","mario2.png")
    cloudImage=loadImage("cloud.png")
    pipesImage=loadImage("pipes.png")
}

function setup(){
    canvas=createCanvas(windowWidth,windowHeight)
    ground=createSprite(width/2,height,width,20)
    ground.addImage("ground",groundImage)
    ground.x=ground.width/2 
    mario=createSprite(50,height-100,20,20)

    mario.addAnimation ("mario",marioImage)
    mario.scale=0.6
}

function draw(){
    background ("pink");
    ground.velocityX=-70
    if(ground.x<500){
        ground.x = ground.width/2
    }
spawnClouds()
spawnPipes()
spawnEnemy()
    drawSprites()
}

function spawnClouds(){
    if(frameCount%100===0){
        var cloud = createSprite(width+20,random(30,190),40,10)
        cloud.addImage(cloudImage)
        cloud.velocityX=-3
        cloud.scale=3
    }
}

function spawnPipes(){
    if (frameCount%300===0){
var pipes = createSprite(width+10,height-120,40,60)
        pipes.addImage(pipesImage)
        pipes.velocityX=-4

    }
}

function spawnEnemy(){
    if (frameCount%100===0){
var enemy = createSprite(width+10,height-60,10,10)
       // enemy.addImage(enemyImage)
        enemy.velocityX=-4

    }
    
    }
