import Boot from './classes/states/Boot';
import Preload from './classes/states/Preload';
import Play from './classes/states/Play';


let game;

const init = () => {

	game = new Phaser.Game(800,600, Phaser.AUTO);
	game.state.add('Boot', Boot, true);
  game.state.add('Preload', Preload, false);
game.state.add('Play', Play, false);

};


init();
