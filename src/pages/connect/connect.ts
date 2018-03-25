import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-connect',
  templateUrl: 'connect.html',
})
export class ConnectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  goToLogin() {
    this.navCtrl.push('LoginPage');
  }

  goToRegister() {
    this.navCtrl.push('RegisterPage');
  }

}
