class HappinesBar extends Phaser.Sprite {

constructor(game, width, height){

super(game, width, height);

this.width = width;
this.darkBar = this.game.add.sprite(60, 60 , 'darkBar');
this.darkBar.width = width-160;
this.darkBar.height = 30;

this.lightBar = this.game.add.sprite(60, 65 , 'lightBar');
this.lightBar.width = 0;
this.lightBar.height = 20;
//this.testStar.scale.setTo(0.15, 0.15);


this.sadStar = this.game.add.sprite(20, 20 , 'sadStar');
this.sadStar.scale.setTo(0.15, 0.15);

this.happyStar = this.game.add.sprite(width-20-130, 20 , 'happyStar');
this.happyStar.scale.setTo(0.15, 0.15);

this.cheer = this.game.add.audio('cheer');
this.cheer.loop = false;


}

update(){

}

makeshorter(){
  console.log(this.lightBar);

  this.newWidth = this.lightBar.width+(this.width/15);
  if (this.newWidth > this.darkBar.width) {
    this.newWidth = 0;
    this.cheer.play();

  }
    this.game.add.tween(this.lightBar).to( { width: this.newWidth }, 500, "Linear", true);

}


}

module.exports = HappinesBar;
