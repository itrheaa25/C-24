const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1050,300,70,70);
    box2 = new Box(880,300,70,70);
    box3 = new Box(1050,150,70,70);
    box4 = new Box(880,150,70,70);
    box5 = new Box(960,60,70,70);
    ground = new Ground(600,height,1200,20)

    pig1 = new Pig(960,300);
    pig2 = new Pig(960,150);

    log1 = new Log(970,200,300,PI/2);
    log2 = new Log(970,100,300,PI/2);
    log3 = new Log(940,25,130,PI/7);
    log4 = new Log(990,25,130,-PI/7);

    angryB = new Bird(200,300);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    angryB.display();   

}
