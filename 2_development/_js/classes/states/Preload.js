export default class Preload extends Phaser.State{

	preload(){
		this.load.onLoadComplete.addOnce(this.onLoadComplete,this);
		console.log('prload preload');
		this.load.image('start', 'assets/start.png');
		this.load.image('bg', 'assets/bg.png');
		this.load.spritesheet('player', 'assets/player.png', 518/9, 40, 9);
				this.load.spritesheet('vis1', 'assets/vis1.png', 900/6, 146, 6);
								this.load.spritesheet('worm1', 'assets/worm1.png', 925/8, 125, 8);


	}

	create(){

		//this.sound.mute = false;
	}

	onLoadComplete(){
		console.log('load complete');
		this.game.state.start('Play');

	}
}
