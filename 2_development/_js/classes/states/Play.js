import Background from '../objects/Background';
import BackgroundStone from '../objects/BackgroundStone';
import Coral from '../objects/Coral';

import Player from '../objects/Player';

import Turtle from '../objects/Turtle';
import Fish from '../objects/Fish';
import Octopus from '../objects/Octopus';

import Worm1 from '../objects/Worm1';
import Worm2 from '../objects/Worm2';
import Worm3 from '../objects/Worm3';

export default class Play extends Phaser.State{

	create(){
    console.log('play create');

    this.initGame();
    this.initBackground();
    this.handleBackground();

    this.visjes = this.game.add.group();

    this.player = new Player(this.game, this.game.width/6, this.game.height/2);
    this.game.add.existing(this.player);
    this.handleDiver();

		this.wormpjes = this.game.add.group();
    this.game.time.events.loop(Phaser.Timer.SECOND * 2, this.secondLoop, this);
    this.light = this.game.add.sprite(0, 0 - 150, 'light');

  }

  initGame() {
    //settings
    this.speedPlayer = 300;
    this.maxVisjes = 4;
  }

  initBackground() {
    this.background = new Background(this.game, 0, 0, this.game.width, this.game.height);
    this.game.add.existing(this.background);

    this.backStones = this.game.add.group();
		this.frontStones = this.game.add.group();
		this.coral = this.game.add.group();

    for(let i = 0; i < 3; i++) {
      let backStone = new BackgroundStone(this.game, (i * 1000) + 250, this.game.height, false);
      this.backStones.add(backStone);

			let frontStone = new BackgroundStone(this.game, (i * 1200) - 250, this.game.height, true);
      this.frontStones.add(frontStone);
    }

		for(let i = 0; i < 20; i++) {
			let coral = new Coral(this.game, (i * 100), this.game.height, false);
			this.coral.add(coral);
		}

		this.game.add.existing(this.backStones);
		this.game.add.existing(this.frontStones);
		this.game.add.existing(this.coral);

  }

  handleBackground() {
		this.backStonesGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 12,
      () => { this.generateObjects(this.game, ...[this.backStones], 'stones', false); }
      , this);

    this.frontStonesGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 9,
      () => { this.generateObjects(this.game, ...[this.frontStones], 'stones', true); }
      , this);

    this.coralGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 0.5,
      () => { this.generateObjects(this.game, ...[this.coral], 'coral', true); }
      , this);
    //this.generateObjects(this.game, ...[this.coral], 'coral', true);
		this.game.add.existing(this.coral);
  }

  randomCoral() {
    console.log('random coral');
    //this.game.time.events.add(time, this.generateObjects(this.game, ...[this.coral], 'coral', true)).autoDestroy = true;
  }

  generateObjects(game, objects, objectType, front) {

    let object = objects.getFirstDead();
    //let coralTimer = 0;

    if(!object) {
      if(objectType === 'stones') {
        object = new BackgroundStone(game, 0, game.height, front);
      } else {
        object = new Coral(game, game.width, game.height);
      }

      objects.add(object);
    }

    object.reset(game.width, game.height);
    object.randomObject(game);

    game.add.existing(objects);

    /*if(objectType === 'coral') {
      console.log('its coral');
      coralTimer = this.game.time.events.add(this.game.rnd.integerInRange(500, 3000), this.randomCoral);
    }*/

  }

  handleDiver() {
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.greenKey = this.game.input.keyboard.addKey(65);
    this.greenKey.onDown.add(this.generateWorm1, this);

    this.redKey = this.game.input.keyboard.addKey(90);
    this.redKey.onDown.add(this.generateWorm2, this);

    this.yellowKey = this.game.input.keyboard.addKey(69);
    this.yellowKey.onDown.add(this.generateWorm3, this);
  }

  generateWorm1(){
    var worm1 = new Worm1(this.game, this.player.body.x+this.player.body.width/2, this.player.body.y);
    this.wormpjes.add(worm1,true);
    worm1.reset(this.player.body.x+this.player.body.width/2, this.player.body.y+this.player.body.height/2);
    worm1.body.velocity.x = 300;
  }

  generateWorm2(){
    var worm2 = new Worm2(this.game, this.player.body.x+this.player.body.width/2, this.player.body.y);
    this.wormpjes.add(worm2,true);
    worm2.reset(this.player.body.x+this.player.body.width/2, this.player.body.y+this.player.body.height/2);
    worm2.body.velocity.x = 300;
  }

  generateWorm3(){
    var worm3 = new Worm3(this.game, this.player.body.x+this.player.body.width/2, this.player.body.y);
    this.wormpjes.add(worm3,true);
    worm3.reset(this.player.body.x+this.player.body.width/2, this.player.body.y+this.player.body.height/2);
    worm3.body.velocity.x = 300;
  }

	secondLoop(){
		this.teller++;
		this.generatevisjes();
	}

	generatevisjes() {
		if (this.visjes.children.length < this.maxVisjes) {

      //enhancement: handle randomness in general fish class
			this.welkeVis = this.game.rnd.integerInRange(1, 3);

			switch (this.welkeVis) {
				case 1:
				let turtleY = this.game.rnd.integerInRange(38, this.game.height-38);
				let	turtle = new Turtle(this.game, this.game.width, turtleY);
				this.visjes.add(turtle,true);
				turtle.reset(this.game.width, turtleY);
				break;

				case 2:
				let fishY = this.game.rnd.integerInRange(38, this.game.height-38);
				let	fish = new Fish(this.game, this.game.width, fishY);
				this.visjes.add(fish,true);
				fish.reset(this.game.width, fishY);
				break;

				case 3:
				let octopusY = this.game.rnd.integerInRange(38, this.game.height-38);
				let	octopus = new Octopus(this.game, this.game.width, octopusY);
				this.visjes.add(octopus,true);
				octopus.reset(this.game.width, octopusY);
				break;

			}

		}

  }

  handleWormFishCollision(worm, vis){
		worm.kill();
		vis.body.velocity.x = -100;

		if (vis.type === worm.type) {
			vis.kill();
		}else{

		}
		//vis.body.velocity.x = -100;;
		//console.log(vis.type);
		//console.log(worm.type);
	}

	update(){

		if(this.player.body){
			this.player.body.velocity.x = 0;
			this.player.body.velocity.y = 0;

			if(this.cursors.left.isDown){
				this.player.body.velocity.x = -this.speedPlayer;
			}

			if(this.cursors.right.isDown ){
				this.player.body.velocity.x = this.speedPlayer;
			}

			if(this.cursors.up.isDown ){
				this.player.body.velocity.y = -this.speedPlayer;
			}

			if(this.cursors.down.isDown ) {
				this.player.body.velocity.y = this.speedPlayer;

			}

			this.visjes.forEach(visje => {
				this.wormpjes.forEach(worm => {
					this.game.physics.arcade.collide(worm, visje,
						this.handleWormFishCollision, null, this);
					});
				});
			}

      //this.game.time.events.add(this.game.rnd.integerInRange(500, 3000), this.randomCoral);
		}

		onLoadComplete() {

		}
	}
