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

  /*constructor(game) {
    super(game);

    let rndTree = this.rndTree();
    this.tree = new Tree(game, 120, this.game.height - 25, 'tree_' + rndTree);
    this.tree.anchor.setTo(0,1);

    this.active = true;
    this.setAll('body.velocity.x', -400);
  }

  update() {
    if(this.active) {
      this.setAll('body.velocity.x', -400);
    } else {
      this.setAll('body.velocity.x', 0);
    }

    if(this.tree.worldPosition.x < -this.width) {
      this.exists = false;
    }
  }

  reset(x, alphaHandler) {
    this.tree.reset(x + 120, this.game.height - 25);
    this.tree.worldPosition.x = x + 120;

    this.tree.randomTree('tree_' + this.rndTree());

    this.setAll('body.velocity.x', -400);
    this.exists = true;

    this.handleAlpha(alphaHandler);
  }

  rndTree() {
    return this.game.rnd.integerInRange(1, 5);
  }

  handleAlpha(alphaHandler) {
    if(alphaHandler) {
      this.alpha = 0.3;
    } else {
      this.alpha = 0.5;
    }
  }*/
