const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var Ground
var bob1, bob2, bob3, bob4, bob5
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Ground = new ground(350,300,250,20);
	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bob1 = new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2 = new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3 = new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4 = new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5 = new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	Chain1 = new Rope(bob1.body, Ground.body, -bobDiameter*2, 0);
	Chain2 = new Rope(bob2.body, Ground.body, -bobDiameter*1, 0);
	Chain3 = new Rope(bob3.body, Ground.body, 0, 0);
	Chain4 = new Rope(bob4.body, Ground.body, bobDiameter*1, 0);
	Chain5 = new Rope(bob5.body, Ground.body, bobDiameter*2, 0);

	bob1 = new bob(300,500,40);
	bob2 = new bob(300,500,40);
	bob3 = new bob(300,500,40);
	bob4 = new bob(300,500,40);
	bob5 = new bob(300,500,40);

	Chain1 = new Rope(bob1.body, Ground.body, -20*2, 0);
	Chain2 = new Rope(bob2.body, Ground.body, -20*2, 0);
	Chain3 = new Rope(bob3.body, Ground.body, -20*2, 0);
	Chain4 = new Rope(bob4.body, Ground.body, -20*2, 0);
	Chain5 = new Rope(bob5.body, Ground.body, -20*2, 0);

	Engine.run(engine);

}
function draw() {
  
	rectMode(CENTER);
  	background("cyan");
	
	Ground.display();
	Chain1.display();
	Chain2.display();
	Chain3.display();
	Chain4.display();
	Chain5.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	bob1.x = bob1.body.position.x;
  	bob1.y = bob1.body.position.y;
	Go();
 	drawSprites();
 
}
function Go(){
	if (keyDown(UP_ARROW)){
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x : 3, y : -2});
	}
}
