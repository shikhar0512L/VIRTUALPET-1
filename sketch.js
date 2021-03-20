//creating variables
var dog, happyDog
var database, foodS, foodStock
//loading image....
function preload()
{
	dog = loadImage("doglmg.png");
  happyDog = loadImage("dogimg1.png");
}

function setup() {
  database = firebase.database();
  console.log(database);
foodStock=database.ref("food");
foodStock.on("value",readStock);
	createCanvas(500, 500);
  
}


function draw(){  
  //background
background(46, 139, 87);
//condition of press up arrow
if(KeyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage("dogimg1.png");
    }

  drawSprites();

}
//function to read values from DB
function readStock(data){
  foodS=data.val();
}
//functions to write values in DB
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}