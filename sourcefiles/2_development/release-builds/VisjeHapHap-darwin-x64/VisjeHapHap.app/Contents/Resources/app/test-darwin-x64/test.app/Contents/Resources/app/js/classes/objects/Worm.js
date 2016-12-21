/*export default*/ class Worm extends Phaser.Sprite {
  constructor(game, x, y, wormColor) {
    super(game, x, y, 'worm_' + wormColor);

    this.animations.add('feeding');
		this.animations.play('feeding', 10, true);

    this.anchor.setTo(0.5, 0.5);
		this.game.physics.arcade.enableBody(this);
		this.alive = true;
		this.points = 5;
		this.lives = 1;

    this.lives = wormColor;
  }

  update() {

    if (this.alpha < 1) {
      //scaling and throwing
			this.alpha = this.alpha + 0.05;
		}

		if(!this.inWorld) {
			this.exists = false;
			this.destroy();
		}

  }

  reset(x,y){
		this.body.velocity.x = 100;
		this.x = x;
		this.y = y;
		this.exists = true;
		this.hasScored = false;
	}

	kill(){
		this.body.velocity.y = 0;
		this.body.velocity.x = 100;
		this.alpha = 0;
		this.lives--;
		if (this.lives == 0) {
			//this.deathSound.play();
			this.destroy();
		}
	}

}

	module.exports = Worm;
