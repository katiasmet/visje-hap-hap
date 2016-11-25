import Player from '../objects/Player';
import Vis1 from '../objects/Vis1';
import Worm1 from '../objects/Worm1';
export default class Play extends Phaser.State{

	create(){
		console.log('play create');

		this.achtergrond = this.game.add.group();

		this.bg = this.game.add.sprite(0,0,'bg');
		this.achtergrond.add(this.bg,true);
		//this.sound.mute = false;

		this.player = new Player(this.game, this.game.width/2, this.game.height-100);
		this.game.add.existing(this.player);
		this.player.anchor.setTo(0.5, 0.5);
		this.game.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds = true;
		this.speedPlayer = 300;

		this.visjes = this.game.add.group();
		this.wormpjes = this.game.add.group();

		this.game.time.events.loop(Phaser.Timer.SECOND * 1,
			this.secondLoop, this);

		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.key1.onDown.add(this.generateWorm1, this);

	}

	generateWorm1(){
		var worm1 = new Worm1(this.game, this.player.body.x+this.player.body.width/2, this.player.body.y);
		this.wormpjes.add(worm1,true);
		worm1.reset(this.player.body.x+this.player.body.width/2, this.player.body.y);
		worm1.body.velocity.x = 300;
}

secondLoop(){
	this.teller++;
	this.generatevisjes();


}

	generatevisjes() {
		var vis1y = this.game.rnd.integerInRange(38, this.game.height-38);
		var	vis1 = new Vis1(this.game, this.game.width, vis1y);
		this.visjes.add(vis1,true);
		vis1.reset(this.game.width, vis1y);
	}

	update(){
		console.log('play update');
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

		}
	}

	onLoadComplete(){


	}
}
