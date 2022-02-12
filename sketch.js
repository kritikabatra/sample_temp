
var trex ,trex_running;

function preload(){ // load images, animations and sound files
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}

function setup(){ // create sprites, add animation and images, executes its st. only once
  createCanvas(600,200)
 
  //create a trex sprite
 trex = createSprite(50,150,40,80);
 trex.addAnimation("running", trex_running);
 trex.scale = 0.5;
}

function draw(){
  background("white")
  
  drawSprites();

}
