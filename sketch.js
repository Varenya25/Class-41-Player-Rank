var database;
var gameState = 0, playerCount = 0;
var form;
var game;
var player;
var allPlayers;
var car1, car2, car3, car4, cars;
var car1Image, car2Image, car3Image, car4Image;
var groundImage;
var trackImage;

function preload(){
  car1Image = loadImage("Images/car1.png");
  car2Image = loadImage("Images/car2.png");
  car3Image = loadImage("Images/car3.png");
  car4Image = loadImage("Images/car4.png");
  groundImage = loadImage("Images/ground.png");
  trackImage = loadImage("Images/track.jpg");

}

function setup(){
  database = firebase.database();
  createCanvas(displayWidth - 20, displayHeight - 30);
  game = new Game ();
  game.getGameState ();
  game.start ();
}
 

function draw(){
  background("white");
 
  if (playerCount == 4){
    game.updateGameState (1);
  }
  
  if(gameState == 1){
   clear ();
   game.play();
   drawSprites();
  }
  
  if(gameState == 2){
    game.end();
  }
}