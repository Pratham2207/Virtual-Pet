//Create variables here
var dog;
var food,foodS;
var database;





function preload()
{
  //load images here
  dog = loadImage('Images/dogImg.png');
  dog = loadImage('Images/dogImg1.png');

}

function setup() {
  createCanvas(500, 500);
  if(foodS !== undefined){
  
  database  = firebase.database();
  var foodStock = database.ref('Food')
  foodStock.on('value',readStock);

  dog = createSprite(250,250,10,10);
  

}
}


function draw() {  
background(46, 139, 87);
if(foodS !== undefined){

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }


  drawSprites();
  //add styles here
}
}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){

  if(x <= 0){
    x = 0;
  }else{
    x = x-1;
  }

  database.ref('/').update({
    Food:x
  })
}

