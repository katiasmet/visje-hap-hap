export default class Fish extends Phaser.Sprite {
	constructor(game, x, y, frame) {
		super(game, x, y, 'fish_sad', frame);

    this.animations.add('fish_sad');
		this.animations.play('fish_sad', 10, true);

		this.anchor.setTo(0.5, 0.5);
		this.game.physics.arcade.enableBody(this);
		this.alive = true;
		this.points = 5;
		this.lives = 1;
		this.type = 2;

	}
	reset(x,y){
		this.body.velocity.x = -100;
		this.x = x;
		this.y = y;
		this.exists = true;
		this.hasScored = false;
	}
	hitwrong(){
		this.body.velocity.x = -100;
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


	update(){
		if (this.alpha < 1) {
			this.alpha = this.alpha + 0.05;
		}

		if(!this.inWorld) {
			this.exists = false;
			this.destroy();
		}



		if(this.x < 400){
			this.body.velocity.x = 0;
		}
	}
}
