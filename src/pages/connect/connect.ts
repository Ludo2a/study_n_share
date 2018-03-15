import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { RegisterPage } from "../register/register"
import { LoginPage } from '../login/login';




@Component({
  selector: 'page-connect',
  templateUrl: 'connect.html',
})
export class ConnectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }

}
