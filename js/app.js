var game = new Phaser.Game(300, 500, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

function preload () {
  game.load.image('background', 'assets/vinyl_bg.png');
  game.load.image('block', 'assets/block.png');
  
}

var player;
var cursors;
var pointer;
var startTime;
var playTime;

function create () {

  startTime = Date.now();

  // Enable Arcade Physics system
  // game.Physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.startSystem(Phaser.Physics.ARCADE);

  // Add game background
  game.add.sprite(0, 0, 'background');

  player = game.add.sprite((game.world.width / 2) - 10 , (game.world.height / 2) - 10, 'block');

  // Enable physics on the player
  game.physics.arcade.enable(player);
  // Player physics properties. player should fall at a speed based on the gravity level.
  player.body.gravity.y = 800;
  player.body.collideWorldBounds = true;

  // Key controls
  cursors = game.input.keyboard.createCursorKeys();

  
}

function update () {
  // console.log('pointer', game.input.activePointer);

  // Check if player has collided with the world bounds
  if (playerHasCollidedWithWorldBounds()) {
    endGame();
  }

  if (game.input.activePointer.isDown) {
    if (game.input.activePointer.positionDown.x < player.body.position.x) {
      player.body.velocity.x = -80;
      player.body.velocity.y = -400;
    } else {
      player.body.velocity.x = 80;
      player.body.velocity.y = -400;
    }
  }

  if (cursors.left.isDown) {
    player.body.velocity.x = -80;
    player.body.velocity.y = -400;
  }  

  if (cursors.right.isDown) {
    player.body.velocity.x = 80;
    player.body.velocity.y = -400;
  }

}

function playerHasCollidedWithWorldBounds () {
  // horizontal collision check
  if (player.body.blocked.left || player.body.blocked.right) { return true; }
  // vertical collision check
  if (player.body.blocked.up || player.body.blocked.down) { return true; }
}

function endGame () {
  game.paused = true;

  // console.log('You played for:', Math.floor((Date.now() - startTime) / 1000), 'seconds');
}

// function jumpLeft () {
//   player.body.velocity.x = -80;
//   player.body.velocity.y = -400;
// }

// function jumpRight () {
//   player.body.velocity.x = 80;
//   player.body.velocity.y = -400;
// }

