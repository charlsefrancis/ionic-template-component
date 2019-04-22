import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  openIt(tops) {
  tops.open();
}
cancel() {
  console.log('Cancelled!');
}

  constructor(public navCtrl: NavController) {

  }

}
