export default class Background extends Phaser.TileSprite {

  constructor(game, x, y, width, height) {
    super(game, x, y, width, height, 'background');

    //this.autoScroll(-50,0);

    this.game.physics.arcade.enableBody(this);

    this.body.allowGravity = false;
    this.body.immovable = true;
    /*let myBitmap = this.game.add.bitmapData(this.game.width, this.game.height);
    let grd = myBitmap.context.createLinearGradient(0,0,0,500);
    grd.addColorStop(0,'#1db1da');
    grd.addColorStop(1,'#183c70');
    myBitmap.context.fillStyle = grd;
    myBitmap.context.fillRect(0,0, this.game.width, this.game.height);
    this.game.add.sprite(0, 0, myBitmap);*/
  }

}
