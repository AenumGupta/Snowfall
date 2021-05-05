const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var snow1=[];


function preload(){

  backImg=loadImage("snow2.jpg");

}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(backImg); 
  Engine.update(engine);

  console.log("hi");

  if(frameCount%40===0){
    snow1.push(new Snow(random(50, 750),10));
    }
console.log(snow1.length);
console.log(frameCount);
  
for(var j=0; j<snow1.length; j++){
    
      snow1[j].display();
    }

 // drawSprites();
}