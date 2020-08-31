const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var box1,box2,box3,box4,box5,box6,box7,ground;
var world,engine,ball,slingShot
function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();
 world = engine.world;
 ground=new Ground(700,390,width/2,50);
 //lower level
 box1=new Box(730,370,50,50);
 box2=new Box(670,370,50,50)
 box4=new Box(610,370,50,50)
//second level
 box3=new Box(700,330,50,50)
 box5=new Box (640,330,50,50)

 //third level
 box6= new Box(670,250,50,50)
 //ball
 ball=new Ball(330,100,30,30)
 slingShot=new SlingShot(ball.body,{x:330,y:100})
}
 
 


function draw() {
  background(255,255,255);  
 Engine.update(engine);
   box1.display();
  ground.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  slingShot.display();
  ball.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
slingShot.fly()
}