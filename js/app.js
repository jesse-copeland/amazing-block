var game = new Phaser.Game(300, 500, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload () {
  game.load.image('background', 'assets/vinyl_bg.png');
  game.load.image('block', 'assets/block.png');
  
}

var player;
var cursors;

function create () {

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

  // Key controls
  cursors = game.input.keyboard.createCursorKeys();
  
}

function update () {
  if (cursors.left.isDown) {

    player.body.velocity.x = -80;
    player.body.velocity.y = -400;

  } else if (cursors.right.isDown) {

    player.body.velocity.x = 80;
    player.body.velocity.y = -400;
  
  } else {

  }

}