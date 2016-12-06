export default class Background extends Phaser.TileSprite {

  constructor(game, x, y, width, height) {
    super(game, x, y, width, height, 'background');

    //this.autoScroll(-50,0);

    this.game.physics.arcade.enableBody(this);

    this.body.allowGravity = false;
    this.body.immovable = true;

  }

}

	module.exports = Background;
