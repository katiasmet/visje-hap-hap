{

  //const Preload = require('./classes/states/Preload');
  const Intro = require('./classes/states/Intro');
  const Play = require('./classes/states/Play');

  let game;

  const init = () => {

  	game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO);

    //game.state.add('Preload', Preload, false);
    game.state.add('Intro', Intro, false);
    game.state.add('Play', Play, false);

    game.state.start('Intro');
    //game.state.start('Play');

  };

  init();

}
