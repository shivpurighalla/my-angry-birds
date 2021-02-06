const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var box2;
var box3;
var box4;
var bird;
var pig1;
var log1;
var log2;
var pig2;
var box5;
var platform;
var log3,log4;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,570,60,60);
    box2 = new Box(1000,570,60,60);
    box3 = new Box(800,500,60,60);
    box4 = new Box(1000,500,60,60);
    pig1 = new Pig(900,570,50,50);
    bird = new Bird(50,100,20);
    log1 = new Log(900,520,300,20,PI);
    pig2 = new Pig(900,500,50,50);
    log2 = new Log(900,450,300,20,PI);
    box5 = new Box(900,420,60,60);
    platform = new Ground(150,500,300,200);
    log3 = new Log(830,400,170,20,-PI/5);
    log4 = new Log(960,400,150,20,PI/5);
    ground=new Ground(600,590,1200,20);
}

function draw(){
    background("orange");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    pig1.display();
    bird.display();
    log1.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    platform.display();
    ground.display();
   
}