export default class Preload extends Phaser.State{

	preload(){
		this.load.onLoadComplete.addOnce(this.onLoadComplete,this);
    console.log('prload preload');
    		this.load.image('start', 'assets/start.png');


	}

	create(){

			//this.sound.mute = false;
	}

	onLoadComplete(){
		console.log('load complete');
		this.game.state.start('Play');

	}
}
