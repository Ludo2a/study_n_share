import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { FirebaseProvider } from '../../providers/firebase/firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor( public fire: FirebaseProvider,
     public navCtrl: NavController, public navParams: NavParams) {
  }

  clickedBrushIcon(event: Event) {
    this.navCtrl.push('EditProfilePage');
  }

  goToConnect() {
    this.navCtrl.setRoot('ConnectPage');
  }

  goToMyAds() {
    this.navCtrl.push('MyAdsPage');
  }

  logout() {
    this.fire.logout();
    this.navCtrl.setRoot('ProfilePage');
  }

}
