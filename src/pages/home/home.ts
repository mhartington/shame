import { Component } from '@angular/core';
import { Shake } from 'ionic-native';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public platform: Platform
  ) {
    this.platform.ready()
    .then(() => {
      Shake.startWatch().subscribe(
        () => this.playBell()
      )
    })

  }
  shame() {
    var shame = new Audio('assets/audio/shame.mp3'); // buffers automatically when created
    shame.play();
  }
  playBell() {
    console.log("shake");
    var bell = new Audio('assets/audio/bell.mp3'); // buffers automatically when created
    bell.play();
  }
}
