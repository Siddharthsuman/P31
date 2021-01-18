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
  ground1=new Ground(width/2,760,700,20);
 for(var j=65; j<=width;j=j+75)
  {
    plinkos.push(new Plinko(j,75));
  }
  for (var j=20;j<=width-10;j=j+50)
 {
   plinkos.push(new Plinko(j,175));
 }
for (var j=45;j<=width;j=j+70)
{
  plinkos.push(new Plinko(j,275));
}
for (var j=25;j<=width;j=j+60)
{
  plinkos.push(new Plinko(j,375));
}
  

for (var k=0;k<=width;k=k+80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
}



  Engine.run(engine);
}

function draw() {
background(15, 77, 140);
Engine.update(engine);
if (frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+20),10,10));
}
for (var j = 0; j < plinkos.length; j++) {
   
  plinkos[j].display();
}
for (var k = 0; k < divisions.length; k++) {
  divisions[k].display();
  }
for (var j = 0; j < particles.length; j++) {
   
  particles[j].display();
}

  ground1.display();
 
  
  //drawSprites();
}