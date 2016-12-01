export default class Player extends Phaser.Sprite {
	constructor(game, x, y, frame) {
		super(game, x, y, 'player', frame);

		this.animations.add('zwem');
		this.animations.play('zwem', 10, true);
		this.anchor.setTo(0.5, 0.5);
		this.game.physics.arcade.enableBody(this);
		this.lives = 3;
	}

	kill(){
		this.alpha = 0;
		this.lives--;
		if (this.lives == 0) {
			this.destroy();
		}
	}

	update(){
		if (this.alpha < 1) {
			this.alpha = this.alpha + 0.025;
		}else{
			this.alpha = 1;
		}
	}
}
