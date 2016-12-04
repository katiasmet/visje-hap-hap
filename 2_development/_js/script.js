//import Boot from './classes/states/Boot';
import Preload from './classes/states/Preload';
import Intro from './classes/states/Intro';
import Play from './classes/states/Play';

let game;

const init = () => {

	game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO);
	//game.state.add('Boot', Boot, true);
  game.state.add('Preload', Preload, false);
  game.state.add('Intro', Intro, false);
  game.state.add('Play', Play, false);

  game.state.start('Preload');

};

init();
