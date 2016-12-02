import Player from '../objects/Player';
import Vis1 from '../objects/Vis1';
import Vis2 from '../objects/Vis2';
import Vis3 from '../objects/Vis3';
import Worm1 from '../objects/Worm1';
import Worm2 from '../objects/Worm2';
import Worm3 from '../objects/Worm3';
export default class Play extends Phaser.State{

	create(){
		console.log('play create');

		this.achtergrond = this.game.add.group();

		//this.bg = this.game.add.tilesprite(0,0,'bg', this.game.width, this.game.height);
		//this.achtergrond.add(this.bg,true);

		this.tilesprite = this.game.add.tileSprite(0, 0, 1200,1000, 'bg');
		//this.sound.mute = false;

		this.player = new Player(this.game, 50, this.game.height/2);
		this.game.add.existing(this.player);
		this.player.anchor.setTo(0.5, 0.5);
		this.game.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds = true;
		this.speedPlayer = 300;

		this.maxVisjes = 4;

		this.visjes = this.game.add.group();
		this.wormpjes = this.game.add.group();

		this.game.time.events.loop(Phaser.Timer.SECOND * 1,
			this.secondLoop, this);

			this.cursors = this.game.input.keyboard.createCursorKeys();
			this.key1 = this.game.input.keyboard.addKey(65);
			this.key1.onDown.add(this.generateWorm1, this);

			this.key2 = this.game.input.keyboard.addKey(90);
			this.key2.onDown.add(this.generateWorm2, this);

			this.key3 = this.game.input.keyboard.addKey(69);
			this.key3.onDown.add(this.generateWorm3, this);

		}

		generateWorm1(){
			var worm1 = new Worm1(this.game, this.player.body.x+this.player.body.width/2, this.player.body.y);
			this.wormpjes.add(worm1,true);
			worm1.reset(this.player.body.x+this.player.body.width/2, this.player.body.y+this.player.body.height/2);
			worm1.body.velocity.x = 300;
		}

		generateWorm2(){
			var worm2 = new Worm2(this.game, this.player.body.x+this.player.body.width/2, this.player.body.y);
			this.wormpjes.add(worm2,true);
			worm2.reset(this.player.body.x+this.player.body.width/2, this.player.body.y+this.player.body.height/2);
			worm2.body.velocity.x = 300;
		}

		generateWorm3(){
			var worm3 = new Worm3(this.game, this.player.body.x+this.player.body.width/2, this.player.body.y);
			this.wormpjes.add(worm3,true);
			worm3.reset(this.player.body.x+this.player.body.width/2, this.player.body.y+this.player.body.height/2);
			worm3.body.velocity.x = 300;
		}

		secondLoop(){
			this.teller++;
			this.generatevisjes();


		}

		generatevisjes() {
			if (this.visjes.children.length < this.maxVisjes) {

				this.welkeVis = this.game.rnd.integerInRange(1, 3);

				switch (this.welkeVis) {
					case 1:
					var vis1y = this.game.rnd.integerInRange(38, this.game.height-38);
					var	vis1 = new Vis1(this.game, this.game.width, vis1y);
					this.visjes.add(vis1,true);
					vis1.reset(this.game.width, vis1y);
					break;

					case 2:
					var vis2y = this.game.rnd.integerInRange(38, this.game.height-38);
					var	vis2 = new Vis2(this.game, this.game.width, vis2y);
					this.visjes.add(vis2,true);
					vis2.reset(this.game.width, vis2y);
					break;

					case 3:
					var vis3y = this.game.rnd.integerInRange(38, this.game.height-38);
					var	vis3 = new Vis3(this.game, this.game.width, vis3y);
					this.visjes.add(vis3,true);
					vis3.reset(this.game.width, vis3y);
					break;

				}


			}

		}

		wormraakvis(worm, vis){
			worm.kill();
			vis.body.velocity.x = -100;

			if (vis.type === worm.type) {
				vis.kill();

			}else{

			}
			//vis.body.velocity.x = -100;;
			//console.log(vis.type);
			//console.log(worm.type);
		}

		update(){

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

				this.visjes.forEach(visje => {
					this.wormpjes.forEach(worm => {
						this.game.physics.arcade.collide(worm, visje,
							this.wormraakvis, null, this);
						});
					});
				}
			}

			onLoadComplete(){
			}
		}
