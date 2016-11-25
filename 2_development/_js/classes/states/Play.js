import Player from '../objects/Player';
import Vis1 from '../objects/Vis1';
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

	this.cursors = this.game.input.keyboard.createCursorKeys();

	}

	generatevisjes() {
	var vis1x = this.game.rnd.integerInRange(38, this.game.width-38);
	var	vis1 = new Vis1(this.game, vis1x, 0);
	this.visjes.add(vis1,true);
	vis1.reset(vis1x, 0);
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
			this.generatevisjes();

		}

		if(this.cursors.down.isDown ) {
			this.player.body.velocity.y = this.speedPlayer;

		}

		}
  }

	onLoadComplete(){


	}
}
