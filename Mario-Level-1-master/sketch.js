var mario ,mario_running,mario_collided;
var bg,bgImage

function preload(){
mario_running=loadAnimation("images/mar1.png","images/mar2.png","images/mar3.png","images/mar4.png","images/mar5.png","images/mar6.png","images/mar7.png");
bgImage=loadImage("images/bgnew.jpg")



}

function setup() {
createCanvas(1000, 600);
bg=createSprite(580,300);
bg.addImage(bgImage)
bg.scale=0.5;
mario=createSprite(200,500,20,50);
mario.addAnimation("running",mario_running);
mario.scale=0.3;

ground=createSprite(200,585,400,10);
ground.visible=false;

}

function draw() {
if (keyDown("space")){
    mario.velocityY=-16;
}

mario.collide(ground);
mario.velocityY=mario.velocityY+0.5;
drawSprites();

}
