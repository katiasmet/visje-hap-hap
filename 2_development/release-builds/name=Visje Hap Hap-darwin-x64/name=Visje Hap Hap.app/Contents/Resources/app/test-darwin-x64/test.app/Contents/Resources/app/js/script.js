{
	require('./johnny-five-init');
	//require('./vendors/phaser.min.js');
//import Boot from './classes/states/Boot';
const Preload = require('./classes/states/Preload')
//import Preload from './classes/states/Preload';
const Intro = require('./classes/states/Intro')
const Play = require('./classes/states/Play')


//import Intro from './classes/states/Intro';
//import Play from './classes/states/Play';

let game;

const init = () => {

console.log('test1');
	game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO);
	//game.state.add('Boot', Boot, true);
	console.log('test2');
  game.state.add('Preload', Preload, false);
  game.state.add('Intro', Intro, false);
  game.state.add('Play', Play, false);
console.log('test3');
  game.state.start('Preload');
console.log('test4');
};

init();
}
