import {Page, Platform} from 'ionic-framework/ionic';

@Page({
  templateUrl: 'app/home/home.html',
})
export class HomePage {
  constructor(public platform: Platform) {
    this.platform.ready().then(() => {
      console.log("Ready")
      console.log(window.shake);
      window.shake.startWatch(this.playBell);

    });

  }
  error(err) {
    console.log("err", err);
  }
  shame() {
    var shame = new Audio('audio/shame.mp3'); // buffers automatically when created
    shame.play();
  }
  playBell() {
    console.log("shake");
    var bell = new Audio('audio/bell.mp3'); // buffers automatically when created
    bell.play();
  }
}
