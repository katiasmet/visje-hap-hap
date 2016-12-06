import Background from '../objects/Background';
import Button from '../objects/Button';
import Fish from '../objects/Fish';
import Turtle from '../objects/Turtle';

export default class Intro extends Phaser.State {
  create() {

    console.log('in intro');
    this.background = new Background(this.game, 0, 0, this.game.width, this.game.height);
    this.game.add.existing(this.background);

    this.stones = this.game.add.group();
    let backStone = this.game.add.sprite(this.game.world.centerX + 100, this.game.height, 'assets', 'back_stone_1.png');
    backStone.anchor.setTo(0.5, 1);
    this.stones.add(backStone);
    let frontStone1 = this.game.add.sprite(-450, this.game.height, 'assets', 'front_stone_1.png');
    frontStone1.anchor.setTo(0, 1);
    this.stones.add(frontStone1);
    let frontStone2 = this.game.add.sprite(750, this.game.height, 'assets', 'front_stone_2.png');
    frontStone2.anchor.setTo(0, 1);
    this.stones.alpha = 0.4;
    this.stones.add(frontStone2);
    this.game.add.existing(this.stones);

    this.fish = new Fish(this.game, this.game.world.centerX - 340, this.game.world.centerY - 60);
    this.fish.scale.setTo(0.7, 0.7);
    this.game.add.existing(this.fish);

    this.turtle = new Turtle(this.game, this.game.world.centerX + 260, this.game.world.centerY - 175);
    this.turtle.scale.setTo(-1, 1);
    this.game.add.existing(this.turtle);

    this.logo = this.game.add.sprite(this.game.world.centerX, 0, 'assets', 'logo.png');
    this.logo.anchor.setTo(0.5, 0.5);
    this.logo.scale.setTo(0.9, 0.9);
    this.game.add.tween(this.logo).to({y: this.game.world.centerY - 75}, 500, Phaser.Easing.Bounce.Out, true);

    this.startButton = new Button(this.game, this.game.world.centerX - 5, this.game.world.centerY + 150, 'play.png');
    this.startButton.events.onInputDown.add(this.startGame, this);
    this.game.add.existing(this.startButton);
    this.game.add.tween(this.startButton.scale).to( {x: 1.1, y: 1.1}, 1000, Phaser.Easing.linear, true, 300, 0, true).loop(true);

    this.infoButton = new Button(this.game, this.game.world.centerX - 200, this.game.world.centerY + 200, 'info.png');
    this.infoButton.events.onInputDown.add(this.handleInfo, this);
    this.game.add.existing(this.infoButton);

    this.light = this.game.add.sprite(0, 0 - 150, 'light');
  }

  startGame() {
    this.game.state.start('Play');
  }

  handleInfo() {
    //audiofile
    console.log('info');
  }
}

module.exports = Intro;
