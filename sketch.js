const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var box1,box2;
var ground1;

function setup() {
  createCanvas(400,400);

  myengine = Engine.create();   //.world
  myworld = myengine.world;

  ground1 = new Ground(200,390,400,20);

  box1 = new Box(240,50,50,70);
  box2 = new Box(200,150,70,80);  
}


function draw() {
  background("orange"); 

  Engine.update(myengine);

  ground1.display();

  box1.display();
  box2.display();
}