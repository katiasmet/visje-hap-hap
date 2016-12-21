const Background = require('../objects/Background');
const BackgroundStone = require('../objects/BackgroundStone');
const Coral = require('../objects/Coral');
const HappinessBar = require('../objects/HappinessBar')

const Player = require('../objects/Player');

const Fish = require('../objects/Fish');
const Worm = require('../objects/Worm');
const Jellyfish = require('../objects/Jellyfish');

require('../../johnny-five-init');
const five = require("johnny-five");

let board, button;
let knopUP = false;
let knopDOWN = false;
let knopY = false;
let knopG = false;
let knopR = false;

class Play extends Phaser.State{

  preload(){
    //background
    this.load.image('background', './assets/images/background.jpg');
    this.load.image('light', './assets/images/light.png');
    this.load.image('darkBar', './assets/images/happinessbar_dark.jpg');
    this.load.image('lightBar', './assets/images/happinessbar_light.jpg');
    this.load.image('lightBarEnd', './assets/images/happinessbar_light_end.png');

    //intro
    this.load.atlasJSONHash('assets', './assets/images/assets.png', './assets/data/assets.json');

    //player
    this.load.atlasJSONHash('player', './assets/images/diver_swimming.png', './assets/data/diver_swimming.json');
    this.load.atlasJSONHash('player_feeding', './assets/images/diver_feeding.png', './assets/data/diver_feeding.json');
    this.load.atlasJSONHash('player_electrocution', './assets/images/diver_electrocution.png', './assets/data/diver_electrocution.json');

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

    //enemy
    this.load.atlasJSONHash('jellyfish', './assets/images/jellyfish.png', './assets/data/jellyfish.json');

    //worms
    this.load.atlasJSONHash('worm_red', './assets/images/worm_red.png', './assets/data/worm_red.json');
    this.load.atlasJSONHash('worm_yellow', './assets/images/worm_yellow.png', './assets/data/worm_yellow.json');
    this.load.atlasJSONHash('worm_green', './assets/images/worm_green.png', './assets/data/worm_green.json');

  }

  create(){

    this.initGame();
    this.initBackground();
    this.handleBackground();

    this.fish = this.game.add.group();
    this.game.time.events.loop(Phaser.Timer.SECOND * 2.5, this.generateFish, this);

    this.player = new Player(this.game, this.game.width/6, this.game.height/2);
    this.game.add.existing(this.player);

    this.worms = this.game.add.group();
    this.handleWorms();

    this.jellyfish = this.game.add.group();
    this.game.time.events.loop(Phaser.Timer.SECOND * 10, this.generateJellyfish, this);

    this.happinessBar = new HappinessBar(this.game, this.game.width, this.game.height );
    this.game.add.existing(this.happinessBar);

    this.light = this.game.add.sprite(0, 0 - 150, 'light');

    this.yammy = this.game.add.audio('yammy');
    this.yammy.loop = false;

    this.aww = this.game.add.audio('aww');
    this.aww.loop = false;

    this.story = this.game.add.audio('infoText');
    this.story.loop = false;
    this.game.time.events.add(Phaser.Timer.MINUTE * 5, () => {this.story.play()}, this);


    //HaFe = this.handleFeeding;

    //buttons
    this.initButtons();

  }

  initGame() {
    //settings
    this.speedPlayer = 300;
    this.timeDelay = 0;
  }

  initButtons() {
    this.board = new five.Board();

    this.board.on("ready", function() {
      this.buttonUP = new five.Button(9);
      this.buttonDOWN = new five.Button(6);
      this.buttonY = new five.Button(4);
      this.buttonG = new five.Button(2);
      this.buttonR = new five.Button(3);

      this.buttonUP.on("down", function() {
        console.log('up is down');
        knopUP = true;
      });

      this.buttonUP.on("up", function() {
        console.log('up is up');
        knopUP = false;
      });

      this.buttonDOWN.on("down", function() {
        console.log('down is down');
        knopDOWN = true;
      });

      this.buttonDOWN.on("up", function() {
        console.log('down is up');
        knopDOWN = false;
      });

      this.buttonY.on("down", function() {
        console.log('Y');
        knopY = true;
      });

      this.buttonG.on("down", function() {
        console.log('G');
        knopG = true;
      });

      this.buttonR.on("down", function() {
        console.log('R');
        knopR = true;
      });

    });
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

  handleFeeding(color) {
    this.player.feeding();
    this.game.time.events.add(Phaser.Timer.SECOND * 0.5, () => {this.generateWorm(color);}, this);
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
        }

        generateObjects(game, objects, objectType, x, y, front) {

          let object = objects.getFirstDead();

          if(!object) {
            if(objectType === 'stones') {
              object = new BackgroundStone(game, x, y, front);
            } else if(objectType === 'coral') {
              object = new Coral(game, x, y);
            } else if(objectType === 'jellyfish') {
              object = new Jellyfish(game, x, y);
            } else {
              object = new Fish(game, x, y, false);
            }

            objects.add(object);
          }

          object.reset(x, y);

          if(objectType !== 'jellyfish') {
            object.randomObject(game);
          }

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
          this.game.time.events.add(Phaser.Timer.SECOND * 0.5, () => {this.generateWorm(color);}, this);
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
            const fishY = this.game.rnd.integerInRange(200, this.game.height - 100);
            this.generateObjects(this.game, ...[this.fish], 'fish', this.game.width, fishY, true);
          }

          generateJellyfish() {
            const jellyfishX = this.game.rnd.integerInRange(200, this.game.width - 200);
            this.generateObjects(this.game, ...[this.jellyfish], 'jellyfish', jellyfishX, this.game.height, true);
          }

          handleWormFishCollision(worm, fish){
            if (fish.type === worm.type) {
              if (fish.eating()) {
                worm.kill();
                //fish.eating();
                this.yammy.play();
                this.happinessBar.makeshorter();
              }

            }
          }

          handleDiverJellyfishCollision() {
            if (this.game.time.now > this.timeDelay){
              this.player.electrocuting();
              this.aww.play();
              this.timeDelay = this.game.time.now + 5000;
            }
          }

          update(){

            if(this.player.body){
              this.player.body.velocity.x = 0;
              this.player.body.velocity.y = 0;

              if(this.cursors.up.isDown || knopUP){
                this.player.body.velocity.y = -this.speedPlayer;
              }

              if(this.cursors.down.isDown || knopDOWN) {
                this.player.body.velocity.y = this.speedPlayer;
              }

              if (knopR) {
                this.handleFeeding('red');
                knopR = false;

              }
              if (knopY) {
                this.handleFeeding('yellow');
                knopY = false;
              }
              if (knopG) {
                this.handleFeeding('green');
                knopG = false;
              }

              this.fish.forEach(fish => {
                this.worms.forEach(worm => {
                  this.game.physics.arcade.collide(worm, fish,
                    this.handleWormFishCollision, null, this);
                  });
                });
              }

              this.jellyfish.forEach(jellyfish => {
                this.game.physics.arcade.overlap(this.player, jellyfish,
                  this.handleDiverJellyfishCollision, null, this);
                });
              }
            }

            module.exports = Play;
