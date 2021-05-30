const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;



var bg;
var girl;
var snow;
function preload(){
  bg=loadImage("snow2.jpg");
}
function setup() {
  var canvas=createCanvas(1000,600);
  engine=Engine.create();
  world=engine.world;

  girl=new Girl(100,475,250,250);

  snow=new Snow(random(100,1000),0,50,50);
  snow1=new Snow(random(100,1000),10,50,50);
  snow2=new Snow(random(100,1000),20,50,50);
  snow3=new Snow(random(100,1000),30,50,50);
  snow4=new Snow(random(100,1000),40,50,50);

}

function draw() {
  background(bg); 
  Engine.update(engine);
  snow.display();
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  girl.display();
}
