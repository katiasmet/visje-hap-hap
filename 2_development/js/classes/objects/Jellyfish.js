class Jellyfish extends Phaser.Sprite {
	constructor(game, x, y) {

		super(game, x, y, 'jellyfish');

    this.animations.add('swimming');
		this.animations.play('swimming', 10, true);

		this.anchor.setTo(0.5, 0.5);
		this.game.physics.arcade.enableBody(this);
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.body.immovable = true;

	}

	update(){

    this.body.velocity.y = -100;
		this.body.velocity.x = -70;

		if(!this.inWorld) {
			this.exists = false;
			this.destroy();
		}

	}

}

module.exports = Jellyfish;
