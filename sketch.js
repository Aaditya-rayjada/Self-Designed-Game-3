var canvas;
var backgroundImage,bgImg,track;
var database;
var form,player;
var playerCount;
var boy1img;
var boy1,boy2,boys;
var boy2img;
var gameState;
var allPlayers;
var waterImage, powerCoinImage,Waters,powerCoins;

function preload() {
  backgroundImage = loadImage("./assets/jungle.jpg");
 boy1img = loadAnimation("./assets/player1/player11.png","./assets/player1/player12.png","./assets/player1/player13.png","./assets/player1/player14.png",
 "./assets/player1/player15.png","./assets/player1/player16.png","./assets/player1/player17.png","./assets/player1/player18.png");
 boy2img = loadAnimation("./assets/player2/player 21.png","./assets/player2/player 22.png","./assets/player2/player 23.png","./assets/player2/player 24.png",
 "./assets/player2/player 25.png","./assets/player2/player 26.png","./assets/player2/player 27.png","./assets/player2/player 28.png");
 track = loadImage("./assets/track.png");
 waterImage = loadImage("./assets/water.png");
 powerCoinImage = loadImage("./assets/goldCoin.png");
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage); 

  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}