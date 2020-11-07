//namespacing
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var ground;
var box1,box2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,50,20,50);
  box2 = new Box(170,10,50,30);
  ground = new Ground(200,350,400,10);
}

function draw() {
  //refreshing background
  background("black");  

  Engine.update(engine);
  
  box1.display();
  box2.display();
  ground.display();

}