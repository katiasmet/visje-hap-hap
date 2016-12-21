class Button extends Phaser.Sprite {
  constructor(game, x, y, frame) {
    super(game, x, y, 'assets', frame);
    this.anchor.setTo(0.5, 0.5);
    this.inputEnabled = true;
    this.input.useHandCursor = true;
  }
}

module.exports = Button;
