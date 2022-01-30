var buttonImg
var button
var erro
var erroimg
function preload(){
  buttonImg=loadImage("button2.png");
  erroimg=loadImage("f.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  button= createSprite(300,100,20,20);
  button.addImage("button",buttonImg);

}


function draw(){
  background("blue")
  if (mousePressedOver(button)||touches.length>0){
    textSize(100);
    text("test",300,100);
    console.log("teste")
    button.destroy();
    
    acontecimentos();
    touches=[];
  }

  drawSprites();
}

function acontecimentos(){
  var roleta 
  erro= createSprite(300,100);
  roleta=Math.round(random(1,4));
  switch(roleta){
    case 1:  erro.addImage("erro",erroimg)
      break;
  }
  console.log(roleta);
}

   
   