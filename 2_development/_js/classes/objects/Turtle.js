export default class Turtle extends Phaser.Sprite {
	constructor(game, x, y, frame) {
		super(game, x, y, 'turtle_sad', frame);

    this.animations.add('turtle_sad');
		this.animations.play('turtle_sad', 10, true);

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
		this.body.velocity.x = 0;
		//this.alpha = 0;
		this.lives--;
		if (this.lives == 0) {

			this.loadTexture('turtle_eating', 0);

	 this.animations.add('eating');

	 this.animations.play('eating', 10, true);
	 this.game.time.events.add(Phaser.Timer.SECOND * 0.5, this.run, this);
		}
	}

	blij(){
		this.loadTexture('turtle_happy', 0);

 this.animations.add('happy');

 this.animations.play('happy', 10, true);
 this.game.time.events.add(Phaser.Timer.SECOND * 0.5, this.run, this);

	}

	run(){
		this.game.add.tween(this.scale).to( { x: -1 }, 200, "Linear", true);
		this.game.add.tween(this.body.velocity).to( { x: 300 }, 500, "Linear", true);
		this.game.time.events.add(Phaser.Timer.SECOND * 5, this.destroy, this);
	}


	update(){
		if (this.alpha < 1) {
			this.alpha = this.alpha + 0.05;
		}

		/*if(!this.inWorld) {
			this.exists = false;
			this.destroy();
		}*/



		if(this.x < 400){
			this.body.velocity.x = 0;
		}
	}
}
