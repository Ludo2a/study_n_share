import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database'
import { User } from "../../models/user";
import {ProfilPage} from "../profil/profil";

// import { ProfilPage } from "../profil/profil"

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  constructor(private afDatabase: AngularFireDatabase, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  creatProfile() {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`user/${auth.uid}`).set(this.user).then(() => this.navCtrl.setRoot(ProfilPage));

    })
  }

}
