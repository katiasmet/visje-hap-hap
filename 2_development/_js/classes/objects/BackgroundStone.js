let stones;

export default class BackgroundStone extends Phaser.Sprite {
  constructor(game, x, y, front) {
    if(front) {
      stones = [
        'front_stone_1.png',
        'front_stone_2.png',
        'front_stone_3.png',
        'front_stone_4.png'
      ];
    } else {
      stones = [
        'back_stone_1.png',
        'back_stone_2.png',
        'back_stone_3.png',
        'back_stone_4.png'
      ];
    }

    let rndStone = game.rnd.integerInRange(0, 3);

    super(game, x, y, 'assets', stones[rndStone]);
    this.anchor.setTo(0, 1);

    this.game.physics.arcade.enableBody(this);
    this.body.immovable = true;
    this.body.allowGravity = false;
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.active = true;
    this.isFront = front; //parallax front and back stones, get variable in update func

    if(front) {
      //this.alpha = 0.5;
    } else {
      this.alpha = 0.3;
    }

  }

  update() {
    if(this.active) {

      if(this.isFront) {
        this.body.velocity.x = -125;
      } else {
        this.body.velocity.x = -100;
      }

    } else {
      this.body.velocity.x = 0;
    }
  }

  randomObject(game) {
    let rndStone = game.rnd.integerInRange(0, 3);
    this.frameName = stones[rndStone];
  }

}

	module.exports = BackgroundStone;
