export default class Preload extends Phaser.State{

	preload(){

    this.load.onLoadComplete.addOnce(this.onLoadComplete,this);
		//console.log('prload preload');

    //background
		//this.load.image('bg', 'assets/images/bg.png');
    this.load.image('background', 'assets/images/background.jpg');
		this.load.image('light', 'assets/images/light.png');

    //player
    this.load.atlasJSONHash('player', 'assets/images/diver_swimming.png', 'assets/data/diver_swimming.json');
    this.load.atlasJSONHash('player_feeding', 'assets/images/diver_feeding.png', 'assets/data/diver_feeding.json');

    //fish
    this.load.atlasJSONHash('fish_sad', 'assets/images/fish_sad.png', 'assets/data/fish_sad.json');
    this.load.atlasJSONHash('fish_eating', 'assets/images/fish_eating.png', 'assets/data/fish_eating.json');
    this.load.atlasJSONHash('fish_happy', 'assets/images/fish_happy.png', 'assets/data/fish_happy.json');

    this.load.atlasJSONHash('turtle_sad', 'assets/images/turtle_sad.png', 'assets/data/turtle_sad.json');
    this.load.atlasJSONHash('turtle_eating', 'assets/images/turtle_eating.png', 'assets/data/turtle_eating.json');
    this.load.atlasJSONHash('turtle_happy', 'assets/images/turtle_happy.png', 'assets/data/turtle_happy.json');

    //this.load.spritesheet('vis1', 'assets/images/vis1.png', 900/6, 146, 6);
		//this.load.spritesheet('vis2', 'assets/images/vis2.png', 900/6, 146, 6);
		this.load.spritesheet('vis3', 'assets/images/vis3.png', 900/6, 146, 6);

    //worms
    this.load.atlasJSONHash('red_food', 'assets/images/red_food.png', 'assets/data/red_food.json');

    this.load.spritesheet('worm1', 'assets/images/worm1.png', 925/8, 125, 8);
    //this.load.spritesheet('vis1', 'assets/images/vis1.png', 900/6, 146, 6);
		/*this.load.atlasJSONHash('vis1', 'assets/images/fish_sad.png', 'assets/data/fish_sad.json');
		this.load.atlasJSONHash('vis2', 'assets/images/turtle_sad.png', 'assets/data/turtle_sad.json');

		this.load.atlasJSONHash('vis1_eating', 'assets/images/fish_eating.png', 'assets/data/fish_eating.json');
		this.load.atlasJSONHash('vis2_eating', 'assets/images/turtle_eating.png', 'assets/data/turtle_eating.json');

		this.load.atlasJSONHash('vis1_happy', 'assets/images/fish_happy.png', 'assets/data/fish_happy.json');
		this.load.atlasJSONHash('vis2_happy', 'assets/images/turtle_happy.png', 'assets/data/turtle_happy.json');*/
		//this.load.spritesheet('vis2', 'assets/images/vis2.png', 900/6, 146, 6);
		//this.load.spritesheet('vis3', 'assets/images/vis3.png', 900/6, 146, 6);

    //worms
		//this.load.spritesheet('worm1', 'assets/images/worm1.png', 925/8, 125, 8);
	//	this.load.atlasJSONHash('worm1', 'assets/images/food_small.png', 'assets/data/food_small.json');
		this.load.spritesheet('worm2', 'assets/images/worm2.png', 925/8, 125, 8);
		this.load.spritesheet('worm3', 'assets/images/worm3.png', 925/8, 125, 8);

    //sounds


	}

	onLoadComplete(){
		console.log('load complete');
		this.game.state.start('Play');

	}
}
