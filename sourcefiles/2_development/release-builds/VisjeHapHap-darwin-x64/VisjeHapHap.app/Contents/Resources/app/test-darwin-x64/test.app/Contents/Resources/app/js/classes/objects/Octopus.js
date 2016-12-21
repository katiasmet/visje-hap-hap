/*export default*/ class Octopus extends Phaser.Sprite {
	constructor(game, x, y, frame) {
		super(game, x, y, 'octopus_sad', frame);

    this.animations.add('octopus_sad');
		this.animations.play('octopus_sad', 10, true);

    this.anchor.setTo(0.5, 0.5);
		this.game.physics.arcade.enableBody(this);
		this.alive = true;
		this.points = 5;
		this.lives = 1;
		this.type = 3;

    this.scale.setTo(0.7, 0.7);

	}
	reset(x,y){
		this.body.velocity.x = -100;
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

	hitwrong(){
		this.body.velocity.x = -100;
	}

	update(){
		if (this.alpha < 1) {
			this.alpha = this.alpha + 0.05;
		}

		if(!this.inWorld) {
			this.exists = false;
			this.destroy();
		}


		/*if(this.x < 400){
			this.body.velocity.x = 0;
		}*/
	}
}
	module.exports = Octopus;
