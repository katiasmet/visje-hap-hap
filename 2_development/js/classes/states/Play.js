const Background = require('../objects/Background');
const BackgroundStone = require('../objects/BackgroundStone');
const Coral = require('../objects/Coral');

const Player = require('../objects/Player');

const Fish = require('../objects/Fish');
const Worm = require('../objects/Worm');

require('../../johnny-five-init');
const five = require("johnny-five");

let board, button;
let knopUP = false;

class Play extends Phaser.State{

  preload(){
  	console.log('play preload');
  	//this.load.onLoadComplete.addOnce(this.create,this);
    //background
    this.load.image('background', './assets/images/background.jpg');
    this.load.image('light', './assets/images/light.png');

    //intro
    this.load.atlasJSONHash('assets', './assets/images/assets.png', './assets/data/assets.json');

    //player
    this.load.atlasJSONHash('player', './assets/images/diver_swimming.png', './assets/data/diver_swimming.json');
    this.load.atlasJSONHash('player_feeding', './assets/images/diver_feeding.png', './assets/data/diver_feeding.json');

    //fish
    this.load.atlasJSONHash('fish_sad', './assets/images/fish_sad.png', './assets/data/fish_sad.json');
    this.load.atlasJSONHash('fish_eating', './assets/images/fish_eating.png', './assets/data/fish_eating.json');
    this.load.atlasJSONHash('fish_happy', './assets/images/fish_happy.png', './assets/data/fish_happy.json');

    this.load.atlasJSONHash('turtle_sad', './assets/images/turtle_sad.png', './assets/data/turtle_sad.json');
    this.load.atlasJSONHash('turtle_eating', './assets/images/turtle_eating.png', './assets/data/turtle_eating.json');
    this.load.atlasJSONHash('turtle_happy', './assets/images/turtle_happy.png', './assets/data/turtle_happy.json');

    this.load.atlasJSONHash('octopus_sad', './assets/images/octopus_sad.png', './assets/data/octopus_sad.json');
    this.load.atlasJSONHash('octopus_eating', './assets/images/octopus_eating.png', './assets/data/octopus_eating.json');
    this.load.atlasJSONHash('octopus_happy', './assets/images/octopus_happy.png', './assets/data/octopus_happy.json');

    //worms
    this.load.atlasJSONHash('worm_red', './assets/images/worm_red.png', './assets/data/worm_red.json');
    this.load.atlasJSONHash('worm_yellow', './assets/images/worm_yellow.png', './assets/data/worm_yellow.json');
    this.load.atlasJSONHash('worm_green', './assets/images/worm_green.png', './assets/data/worm_green.json');

  }

	create(){
    console.log('play create');

    this.initGame();
    this.initBackground();
    this.handleBackground();

    this.fish = this.game.add.group();

    this.player = new Player(this.game, this.game.width/6, this.game.height/2);
    this.game.add.existing(this.player);

    this.handleWorms();
		this.worms = this.game.add.group();
    this.game.time.events.loop(Phaser.Timer.SECOND * 2.5, this.generateFish, this);

    this.light = this.game.add.sprite(0, 0 - 150, 'light');

    //buttons
    /*this.board = new five.Board();
    //console.log(knopUP);

		this.board.on("ready", function() {
  		this.button = new five.Button(2);

      //this.board.repl.inject({
      //  button: button
      //});

      this.button.on("down", function() {
        console.log("down");
    		knopUP = true;

      });

      this.button.on("up", function() {
        console.log("up");
    		knopUP = false;

      });
  	});*/

  }

  initGame() {
    //settings
    this.speedPlayer = 300;
    //this.maxFish = 4; gaat niet als je vissen wil resetten voor object pooling
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
      () => { this.generateObjects(this.game, ...[this.backStones], 'stones', this.game.width, this.game.height, false); }
      , this);

    this.frontStonesGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 9,
      () => { this.generateObjects(this.game, ...[this.frontStones], 'stones', this.game.width, this.game.height, true); }
      , this);

    this.coralGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 0.5,
      () => { this.generateObjects(this.game, ...[this.coral], 'coral', this.game.width, this.game.height, true); }
      , this);
		this.game.add.existing(this.coral);
  }

  generateObjects(game, objects, objectType, x, y, front) {

    let object = objects.getFirstDead();

    if(!object) {
      if(objectType === 'stones') {
        object = new BackgroundStone(game, x, y, front);
      } else if(objectType === 'coral') {
        object = new Coral(game, x, y);
      } else {
        object = new Fish(game, x, y, false);
      }

      objects.add(object);
    }

    object.reset(x, y);
    object.randomObject(game);

    game.add.existing(objects);

  }

  handleWorms() {
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.greenKey = this.game.input.keyboard.addKey(65); //A
    this.greenKey.onDown.add(() => {this.handleFeeding('green');}, this);

    this.redKey = this.game.input.keyboard.addKey(90); //Z
    this.redKey.onDown.add(() => {this.handleFeeding('red');}, this);

    this.yellowKey = this.game.input.keyboard.addKey(69); //E
    this.yellowKey.onDown.add(() => {this.handleFeeding('yellow');}, this);
  }

  handleFeeding(color) {
    this.player.feeding();
    this.game.time.events.add(Phaser.Timer.SECOND * 1.3, () => {this.generateWorm(color);}, this);
  }

  generateWorm(color) {
    let worm = this.worms.getFirstDead();

    if(!worm) {
      worm = new Worm(this.game,
        this.player.body.x + this.player.body.width/2,
        this.player.body.y + this.player.body.height - 25,
        color);
      this.worms.add(worm);
    }

    worm.reset(this.player.body.x + this.player.body.width/2, this.player.body.y + this.player.body.height - 25, color);
  }

	generateFish() {
    let fishY = this.game.rnd.integerInRange(100, this.game.height - 100);
    this.generateObjects(this.game, ...[this.fish], 'fish', this.game.width, fishY, true);
  }

  handleWormFishCollision(worm, fish){
		if (fish.type === worm.type) {
      worm.kill();
			fish.eating();
		}
	}

	update(){

		if(this.player.body){
			/*this.player.body.velocity.x = 0;
			this.player.body.velocity.y = 0;

			if(this.cursors.left.isDown){
				this.player.body.velocity.x = -this.speedPlayer;
			}

			if(this.cursors.right.isDown ){
				this.player.body.velocity.x = this.speedPlayer;
			}

			if(this.cursors.up.isDown || knopUP){
				this.player.body.velocity.y = -this.speedPlayer;
			}

			if(this.cursors.down.isDown || !knopUP) {
				this.player.body.velocity.y = this.speedPlayer;

			}*/
			//console.log(knopUP);

			this.fish.forEach(fish => {
				this.worms.forEach(worm => {
					this.game.physics.arcade.collide(worm, fish,
						this.handleWormFishCollision, null, this);
					});
				});
			}

		}

		onLoadComplete() {

		}
	}

	module.exports = Play;
