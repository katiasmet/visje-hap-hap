export default class Worm extends Phaser.Sprite {
  constructor(game, x, y, worm) {
    super(game, x, y, 'game_sprite', worm);

    this.animations.add('feeding');
		this.animations.play('feeding', 10, true);
  }

  update() {

    if (this.alpha < 1) {
			this.alpha = this.alpha + 0.05;
		}

		if(!this.inWorld) {
			this.exists = false;
			this.destroy();
		}

  }
}
