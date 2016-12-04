import Background from '../objects/Background';
import BackgroundStone from '../objects/BackgroundStone';

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

    this.background = new Background(this.game, 0, 0, this.game.width, this.game.height);
    this.game.add.existing(this.background);

		this.stones = this.game.add.group();
		//this.stone = new BackgroundStone(this.game, this.game.width, this.game.height);
    //this.stones.add(this.stone);
		this.backStonesGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 4,
      () => { this.generateObjects(this.game, ...[this.stones], 'stones', false); }
      , this);
    this.frontStonesGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 4,
      () => { this.generateObjects(this.game, ...[this.stones], 'stones', true); }
      , this);

    this.game.add.existing(this.stones);

    this.player = new Player(this.game, this.game.width/6, this.game.height/2);
    this.game.add.existing(this.player);
    //this.player.anchor.setTo(0.5, 0.5);
    //this.game.physics.arcade.enable(this.player);
    //this.player.body.collideWorldBounds = true;
    this.handleDiver();

    this.visjes = this.game.add.group();
    this.wormpjes = this.game.add.group();

    this.game.time.events.loop(Phaser.Timer.SECOND * 1, this.secondLoop, this);

    this.light = this.game.add.sprite(0, 0 - 150, 'light');

  }

  initGame() {
    //settings
    this.speedPlayer = 300;
    this.maxVisjes = 4;
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

			this.welkeVis = this.game.rnd.integerInRange(1, 3);

			switch (this.welkeVis) {
				case 1:
				let turtleY = this.game.rnd.integerInRange(38, this.game.height-38);
				let	turtle = new Turtle(this.game, this.game.width, turtleY);
				this.visjes.add(turtle,true);
				turtle.reset(this.game.width, turtleY);
				break;

				case 2:
				var fishY = this.game.rnd.integerInRange(38, this.game.height-38);
				var	fish = new Fish(this.game, this.game.width, fishY);
				this.visjes.add(fish,true);
				fish.reset(this.game.width, fishY);
				break;

				case 3:
				var octopusY = this.game.rnd.integerInRange(38, this.game.height-38);
				var	octopus = new Octopus(this.game, this.game.width, octopusY);
				this.visjes.add(octopus,true);
				octopus.reset(this.game.width, octopusY);
				break;

			}

		}

  }

	generateObjects(game, objects, objectType, front) {

    let object = objects.getFirstDead();

    if(!object) {
	    if(objectType === 'stones') {
	      object = new BackgroundStone(game, game.width, game.height, front);
	    } else {
	      object = new Coral(game, game.width, game.height - 25);
	    }

	    objects.add(object);
	  }

    object.reset(game.width, game.height);
	  object.randomObject(game);
	  game.add.existing(objects);

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
		}

		onLoadComplete(){
		}
	}
