import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from "../../models/user";
import { Profile } from '../../models/profile';
import { ConnectPage } from "../connect/connect";

import * as firebase from 'firebase/app';

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
  profileData = {} as Profile;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );

      if (result) {
        this.creatProfile();
        this.navCtrl.push(ConnectPage);
      }
    } catch (e) {
      console.error(e);
    }
  }



  creatProfile() {
    this.profileData.nom = "à definir";
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`profile/${auth.uid}`).set(this.profileData);
    });
  }


}
