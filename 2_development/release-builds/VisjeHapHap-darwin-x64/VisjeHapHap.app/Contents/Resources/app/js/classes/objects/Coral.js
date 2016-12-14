let coral;

class Coral extends Phaser.Sprite {
  constructor(game, x, y) {
    coral = [
      'coral_1.png',
      'coral_2.png',
      'coral_3.png',
      'coral_4.png',
      'coral_5.png',
      'coral_6.png'
    ];

    let rndCoral = game.rnd.integerInRange(0, 5);

    super(game, x, y, 'assets', coral[rndCoral]);
    this.anchor.setTo(0, 1);

    this.game.physics.arcade.enableBody(this);
    this.body.immovable = true;
    this.body.allowGravity = false;
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;

    this.scale.setTo(0.7, 0.7);

  }

  update() {
    if(this.alive) {
      this.body.velocity.x = -150;
    } else {
      this.body.velocity.x = 0;
    }
  }

  randomObject(game) {
    let rndCoral = game.rnd.integerInRange(0, 5);
    this.frameName = coral[rndCoral];
  }

}

module.exports = Coral;
