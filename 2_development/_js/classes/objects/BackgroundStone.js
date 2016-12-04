let stones;

export default class BackgroundStone extends Phaser.Sprite {
  constructor(game, x, y, front) {

    if(front) {
      stones = [
        'front_stone_1.png',
        'front_stone_2.png'
      ];
    } else {
      stones = [
        'back_stone_1.png',
        'back_stone_2.png'
      ];
    }

    let rndStone = game.rnd.integerInRange(0, 1);

    super(game, x, y, 'assets', stones[rndStone]);
    this.anchor.setTo(0, 1);

    if(front) {
      this.alpha = 0.3;
    } else {
      this.alpha = 0.5;
    }

    this.game.physics.arcade.enableBody(this);
    this.body.immovable = true;
    this.body.allowGravity = false;
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;

    this.active = true;
  }

  update() {
    if(this.active) {
      this.body.velocity.x = -200;
    } else {
      this.body.velocity.x = 0;
    }
  }

  reset(x, y) {
    //this.reset(x, y);
    //this.active = true;
    //this.body.velocity.x = - 200;

    //this.worldPosition.x = x + 120;
    //this.randomStone('tree_' + this.rndTree());
    //this.setAll('body.velocity.x', -200);
    //this.exists = true;
  }


  randomObject(game) {
    let rndStone = game.rnd.integerInRange(0, 1);
    this.frameName = stones[rndStone];
    console.log(this.frameName);
  }

}
