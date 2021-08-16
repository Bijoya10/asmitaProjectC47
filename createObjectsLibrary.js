function createInitialGameObjects() {
  startButton.hide();
  bg = createSprite(width / 2, height / 2);
  bg.addImage("background", bgImg);
  bg.addImage("background2", bgImg2);
  bg.scale = 2.5;
  bg.velocityX = -2;
  gameState = "play";
  ground = createSprite(width / 2, height - 50, width, 30);
  ground.visible=false
  player = createSprite(width - 100, height - 100, 100, 50);

  villain = createSprite(100, height - 100, 100, 50);
  villain.addAnimation("villain", villainImg);
  obstacleGroup = new Group();
  gunGroup = new Group();
  nextButton = createSprite(windowWidth/2,windowHeight/2+50, 50, 20);
  nextButton.visible = false;
}

function spawnObstaclesLevel1() {
  if (frameCount % 95 === 0) {
    var obstacle = createSprite(0, height - 135, 20, 20);
    obstacle.velocityX = 10;
    obstacleGroup.add(obstacle);
    rand = Math.round(random(1, 3));

    obstacle.lifetime = 1000;
    if (rand === 1) {
      obstacle.addImage("cactus1", cactusImg1);
    } else if (rand === 2) {
      obstacle.addImage("cactus2", cactusImg2);
    } else obstacle.addImage("cactus3", cactusImg3);

    obstacle.scale=0.5
    obstacle.debug=true
  }
}

function spawnGunslevel1() {
  if (frameCount % 50 === 0) {
    var gun = createSprite(0, height - 350, 20, 20);
    gun.velocityX = 10;
    gun.lifetime=1000;
    gunGroup.add(gun);

    /*
        rand=Math.round(random(1,3));
        console.log(rand);
        if(rand===1){
         gun.addImage("cactus1",cactusImg1);
        }
        else if(rand===2){
          gun.addImage("cactus2",cactusImg2);
        }
        else 
          gun.addImage("cactus3",cactusImg3);
    
          gun.scale=0.1;
          */
  }
}
