class HappinesBar extends Phaser.Sprite {

  constructor(game, width, height){

    super(game, width, height);

    this.width = width;
    this.darkBar = this.game.add.tileSprite(60, 70 , width-160, 30,'darkBar');

    this.lightBar = this.game.add.tileSprite(60, 77, (width-160) / 2, 16, 'lightBar');
    this.lightBarEnd = this.game.add.sprite(this.lightBar.position.x + this.lightBar.width, 77, 'lightBarEnd');
    this.lightBarEnd.height = 16;

    this.sadStar = this.game.add.sprite(20, 20 , 'assets', 'starfish_sad.png');
    this.happyStar = this.game.add.sprite(width-20-130, 20 , 'assets', 'starfish_happy.png');

    this.cheer = this.game.add.audio('cheer');
    this.cheer.loop = false;

  }

  update(){

  }

  makeshorter(){
    //console.log(this.lightBar);

    this.newWidth = this.lightBar.width+(this.width/15);
    this.lightBarEnd.position.x = this.lightBar.position.x + this.lightBar.width;

    if (this.newWidth > this.darkBar.width) {
      this.newWidth = 0;
      this.cheer.play();
    }

    this.game.add.tween(this.lightBar).to( { width: this.newWidth }, 500, "Linear", true);

  }


}

module.exports = HappinesBar;
