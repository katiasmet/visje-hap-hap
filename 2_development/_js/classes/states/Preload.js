export default class Preload extends Phaser.State{

	preload(){

    this.load.onLoadComplete.addOnce(this.onLoadComplete,this);
		console.log('prload preload');

    //background
		this.load.image('bg', 'assets/images/bg.png');

    //player
    this.load.atlasJSONHash('player', 'assets/images/diver_swimming.png', 'assets/data/diver_swimming.json');

    //fish
    this.load.spritesheet('vis1', 'assets/images/vis1.png', 900/6, 146, 6);
		this.load.spritesheet('vis2', 'assets/images/vis2.png', 900/6, 146, 6);
		this.load.spritesheet('vis3', 'assets/images/vis3.png', 900/6, 146, 6);

    //worms
		this.load.spritesheet('worm1', 'assets/images/worm1.png', 925/8, 125, 8);
		this.load.spritesheet('worm2', 'assets/images/worm2.png', 925/8, 125, 8);
		this.load.spritesheet('worm3', 'assets/images/worm3.png', 925/8, 125, 8);

    //sounds


	}

	create(){

	}

	onLoadComplete(){
		console.log('load complete');
		this.game.state.start('Play');

	}
}
