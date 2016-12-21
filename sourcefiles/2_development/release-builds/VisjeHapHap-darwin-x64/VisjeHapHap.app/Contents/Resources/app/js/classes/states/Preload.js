//const Intro = require('./Intro')

/*export default*/ class Preload extends Phaser.State{

	preload(){
		console.log('in preload-preload');

    this.load.onLoadComplete.addOnce(this.onLoadComplete,this);
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

    //sounds


	}

	onLoadComplete(){
    this.game.state.start('Intro');
		//this.game.state.start('Play');
		console.log('in onLoadComplete-preload');


	}
}

module.exports = Preload;
