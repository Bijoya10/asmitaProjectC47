var ground;
var player, villain;
var rand, bg, bgImg, bgImg2,cactusImg1, cactusImg2, cactusImg3;
var time,lives = 3,score = 0;
var gunGroup,obstacleGroup;
var startButton,nextButton;

var gameState = "start";

function preload() {
  villainImg = loadAnimation("images/boy/boy1.png","images/boy/boy2.png","images/boy/boy3.png","images/boy/boy4.png","images/boy/boy5.png");
  cactusImg1 = loadImage("images/cactus1.png");
  cactusImg2 = loadImage("images/cactus2.png");
  cactusImg3 = loadImage("images/cactus3.png");
  bgImg = loadImage("images/bg2.jpg");
  bgImg2 = loadImage("images/Australian_Grasslands.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  startButton= createButton("startButton");
  startButton.position(windowWidth/2,windowHeight/2);
  startButton.mousePressed(() => {
    createInitialGameObjects();
  });
}

function draw() {
  background("skyblue");
  drawSprites();
  if(gameState==="start"){
    start()
  }
  if (gameState === "play") {
    play();
  }
  if (gameState === "level1") {
    level1()
  }
}
