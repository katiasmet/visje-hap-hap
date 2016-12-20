class Player extends Phaser.Sprite {
	constructor(game, x, y, frame) {
		super(game, x, y, 'player', frame);

		this.animations.add('swimming');
		this.animations.play('swimming', 10, true);

    this.anchor.setTo(0.5, 0.5);
		this.game.physics.arcade.enableBody(this);
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
		this.lives = 3;
	}

	kill(){
		this.alpha = 0;
		this.lives--;
		if (this.lives == 0) {
			this.destroy();
		}
	}

  feeding(){
		this.loadTexture('player_feeding', 0);
    this.animations.add('feeding');
    this.animations.play('feeding', 30, false);

    this.animations.currentAnim.onComplete.add(() => {
      this.swimming();
      }, this);
	}

  swimming() {
    this.loadTexture('player', 0);
    this.animations.play('swimming', 10, true);
  }

	update(){
		if (this.alpha < 1) {
			this.alpha = this.alpha + 0.025;
		}else{
			this.alpha = 1;
		}

    /*if(this.animations.currentFrame.index === 26) {
      console.log('feed it');
      this.throwing = true;
    } else {
      this.throwing = false;
    }*/

	}
}

	module.exports = Player;
