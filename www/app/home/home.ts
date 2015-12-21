import {Page, Platform} from 'ionic-framework/ionic';

@Page({
  templateUrl: 'app/home/home.html',
})
export class HomePage {
  constructor(public platform: Platform) {
    this.platform.ready().then(() => {
      if (window.shake) {
        window.shake.startWatch(this.playBell);
      } else {
        console.warn("looks like you are trying to use a native plugin in the browser, which will not work. Try using this on device");
      }
    });
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
