function preload(){
issimg=loadImage("iss.png")
bgimg=loadImage("spacebg.jpg")
spacecraft1img=loadImage("spacecraft1.png")
spacecraft2img=loadImage("spacecraft2.png")
spacecraft3img=loadImage("spacecraft3.png")
spacecraft4img=loadImage("spacecraft4.png")

}

function setup() {
  createCanvas(1000,600);
 // createSprite(400, 200, 50, 50);

 hasDocked=false

  iss=createSprite(600,250);
  iss.addImage(issimg)

  spacecraft=createSprite(100,480);
  spacecraft.addImage(spacecraft1img)
  spacecraft.scale=0.3
 // spacecraft.debug=true

  object=createSprite(100,420,300,10);
  object.scale=0.3
  object.visible=false

  object1=createSprite(680,120,500,400);
  object1.visible=false

}

function draw() {
  background(bgimg);  


  if(keyDown("left")){
    spacecraft.x=spacecraft.x-5
    object.x=object.x-5
    spacecraft.addImage(spacecraft3img)
    spacecraft.scale=0.3
    hasDocked=true
  }
  if(keyDown("right")){
    spacecraft.x=spacecraft.x+5
    object.x=object.x+5
    spacecraft.addImage(spacecraft4img)
    spacecraft.scale=0.3
    hasDocked=true
  }
  if(keyDown("up")){
    spacecraft.y=spacecraft.y-5
    object.y=object.y-5
    spacecraft.addImage(spacecraft1img)
    spacecraft.scale=0.3
    hasDocked=true
  }
  if(keyDown("down")){
    spacecraft.y=spacecraft.y+5
    object.y=object.y+5
    spacecraft.addImage(spacecraft2img)
    spacecraft.scale=0.3
    hasDocked=true
  }

  if(! hasDocked){
    spacecraft.x=random(95,105)
   spacecraft.y=random(475,485)
  }

  if(object.isTouching(object1)){
    textSize(20)
    fill("red")
    stroke("blue")
    text(" WELL DONE ! MISSION SUCCESFULL ",80,300)
   // object.destroy();
    spacecraft.destroy();
    var object3=createSprite(570,300)
    object3.addImage(spacecraft1img)
    object3.scale=0.2
    //hasDocked=false
  }

  drawSprites();
}