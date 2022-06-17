var road,roadImage;
 var player1,player2;
 var player1Img,player2Img;
  
 function preload(){
  roadImage = loadImage("road.png");
  player1Img = loadImage("player1.png");
  player2Img = loadImage("player2.png");
 }

 function setup(){
  createCanvas(800,600)
  road = createSprite(400,300,800,600);
  road.addImage(roadImage);
  road.scale = 4;
  player1 = createSprite(300,525,50,200);
  player2 = createSprite(500,525,50,200);
  player1.addImage(player1Img);
  player1.scale = 0.2;
  player2.addImage(player2Img);
  player2.scale = 0.2;
 }

 function draw(){
  background("black");
  road.velocityY=5
  console.log(road.y)
  if(road.y>400){
    road.y = road.height/2;
  }
  if(keyDown("up arrow")){player1.velocityY =-3}
  drawSprites();
 }