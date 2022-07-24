var car1, car1Img;
var car2, car2Img, car2G;
var rua, ruaImg;











function preload(){

car1Img = loadImage("car1.png");
car2Img = loadImage("car2.png");
ruaImg = loadImage("Road.png");



}

function setup() {
 createCanvas(400,600);

 rua = createSprite(200,300);
 rua.addImage(ruaImg);
 rua.scale = 0.20;
 rua.velocityY = 7;

 car1 = createSprite(200,500,20,20);
 car1.addImage(car1Img);
 car1.scale = 0.5;

 


}

function draw() {
 background("blue");


 drawSprites();
 edges = createEdgeSprites();

 if (rua.y > 400 ){
    rua.y = height/2;
  }

  if(car2.isTouching(trex)){
    car1.destroy();
  }

  car1.x = World.mouseX;

  createObtacle();
}



function createObtacle() {
  if (World.frameCount % 20 == 0) {
  var car2 = createSprite(Math.round(random(50, 350),40, 10, 10));
  car2.addImage(car2Img);
  car2.scale=0.25;
  car2.velocityY = 20;
  car2.lifetime = 200;
  }
}