let fishSort;

class Fish extends Phaser.Sprite { //general fish class
	constructor(game, x, y, sort) {

    fishSort = [
      'fish',
      'octopus',
      'turtle'
    ];

    let rndFishSort;
    if(sort === 0 || sort === 2) {
      rndFishSort = sort; //used at intro state
    } else {
      rndFishSort = game.rnd.integerInRange(0, 2);
    }

		super(game, x, y, fishSort[rndFishSort] + '_sad');

    this.animations.add('sad');
		this.animations.play('sad', 10, true);

		this.anchor.setTo(0, 0.5);
		this.game.physics.arcade.enableBody(this);
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.body.immovable = true;

    this.isRunning = false;
    this.lives = 1;
		this.points = 5;

    this.sort = fishSort[rndFishSort]; //to handle in other functions
    this.specificSort = false;
    if(sort === 0 || sort === 2) {
      this.specificSort = true; //used at intro state
    }


    this.handleType();
	}

  reset(x,y){
		this.x = x;
		this.y = y;
    this.lives = 1;
    this.isRunning = false;
    this.alive = true;
		this.hasScored = false;
	}

	hitwrong(){
		this.body.velocity.x = -100;
	}

  handleType() {
    switch(this.sort) {
      case 'fish':
        this.scale.setTo(0.65, 0.65);
        this.type = 'yellow';
        break;

      case 'octopus':
        this.scale.setTo(0.7, 0.7);
        this.type = 'red';
        break;

      case 'turtle':
        this.scale.setTo(1, 1);
        this.type = 'green';
        break;
    }
  }

	/*kill(){
    console.log('kill');
		this.body.velocity.y = 0;
		this.body.velocity.x = 0;
	}*/

  eating() {

    this.body.velocity.y = 0;
		this.body.velocity.x = 0;
    this.lives--;

    if(this.lives === 0) {
      this.loadTexture(this.sort + '_eating', 0);
      this.animations.add('eating');
      this.animations.play('eating', 10, false);

      this.animations.currentAnim.onComplete.add(() => {
        this.happy();
      }, this);
    }
  }

	happy(){
		this.loadTexture(this.sort + '_happy', 0);
    this.animations.add('happy');
    this.animations.play('happy', 10, true);

    this.game.time.events.add(Phaser.Timer.SECOND * 0.3, this.run, this);
	}

	run(){
    this.isRunning = true;
		this.scale.x = -this.scale.x;
		this.position.x = this.position.x + this.body.width;
		//this.game.add.tween(this.scale).to( { x: -this.scale.x }, 100, "Linear", true);
    this.game.add.tween(this.body.velocity).to( { x: 300 }, 500, "Linear", true);
		this.game.time.events.add(Phaser.Timer.SECOND * 5, this.destroy, this);
	}

	update(){
    if(!this.isRunning && !this.specificSort) {
      this.body.velocity.x = -100;
    };
		if(!this.inWorld) {
			this.exists = false;
			this.destroy();
		}

	}

  randomObject(game) {
    let rndFishSort = game.rnd.integerInRange(0, 2);
    this.sort = fishSort[rndFishSort];
    this.handleType();

    this.loadTexture(fishSort[rndFishSort] + '_sad', 0);
    this.animations.play('sad', 10, true);
  }
}

module.exports = Fish;
