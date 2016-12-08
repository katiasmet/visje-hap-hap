class Worm extends Phaser.Sprite {
  constructor(game, x, y, wormColor) {
    super(game, x, y, 'worm_' + wormColor);

    this.animations.add('feeding');
		this.animations.play('feeding', 10, true);

    this.anchor.setTo(0.5, 0.5);
		this.game.physics.arcade.enableBody(this);
    this.body.immovable = true;
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
		//this.points = 5;
		//this.lives = 1;

    this.scale.setTo(0.05, 0.05);
    this.type = wormColor;
  }

  update() {
    this.game.add.tween(this.scale).to( {x: 0.6, y: 0.6}, 300, Phaser.Easing.linear, true);
    this.body.velocity.x = 300;
  }

  reset(x,y){
		this.body.velocity.x = 100;
		this.x = x;
		this.y = y;
		this.alive = true;
		this.hasScored = false;
	}

	kill(){
    this.alive = false;

    this.body.velocity.y = 0;
		this.body.velocity.x = 100;
		this.alpha = 0;

    this.destroy();

		//this.lives--;
    /*if (this.lives == 0) {
			//this.deathSound.play();
		}*/
	}

}

	module.exports = Worm;
