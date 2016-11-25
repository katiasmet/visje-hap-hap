export default class Boot extends Phaser.State{
	preload() {
		//this.load.image('preloader', 'assets/preloader.gif');
		console.log('booting');
	}
	create() {
		console.log('Boot State');
		this.game.state.start('Preload');
	}
}
