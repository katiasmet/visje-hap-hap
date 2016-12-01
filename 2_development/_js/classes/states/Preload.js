export default class Preload extends Phaser.State{

	preload(){
		this.load.onLoadComplete.addOnce(this.onLoadComplete,this);
		console.log('prload preload');
		this.load.image('start', 'assets/start.png');
		this.load.image('bg', 'assets/bg.png');
		//this.load.spritesheet('player', 'assets/player.png', 518/9, 40, 9);
		this.load.spritesheet('player', 'assets/divertest2.png', 6300/14, 300, 14);
//		this.load.spritesheet('player', 'assets/divertest1.png', 450, 300, 41);
//this.load.atlasJSONHash('player', 'assets/spritesheet.png', 'assets/sprites.json');
		this.load.spritesheet('vis1', 'assets/vis1.png', 900/6, 146, 6);
				this.load.spritesheet('vis2', 'assets/vis2.png', 900/6, 146, 6);
						this.load.spritesheet('vis3', 'assets/vis3.png', 900/6, 146, 6);
		this.load.spritesheet('worm1', 'assets/worm1.png', 925/8, 125, 8);
		this.load.spritesheet('worm2', 'assets/worm2.png', 925/8, 125, 8);
		this.load.spritesheet('worm3', 'assets/worm3.png', 925/8, 125, 8);


	}

	create(){

		//this.sound.mute = false;
	}

	onLoadComplete(){
		console.log('load complete');
		this.game.state.start('Play');

	}
}
