const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;

var world,engine,body;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var ground1;
function setup() {
  createCanvas(700,780);

  
  engine=Engine.create();
  world=engine.world;
for(var j=75;j<=width;j=j+75);
  {
    plinkos.push(new Plinko(j,75));
  }

  

for (var k=0;k<=width;k=k+80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
}

ground1=new Ground(width/2,778,700,20);

  Engine.run(engine);
}

function draw() {
background(15, 77, 140);

for (var j = 0; j < particles.length; j++) {
   
  particles[j].display();
}

for (var k = 0; k < divisions.length; k++) {
  divisions[k].display();
  }
  
  ground1.display();
  drawSprites();
}