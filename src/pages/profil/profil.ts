import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConnectPage } from '../connect/connect';
import { EditProfilePage } from "../edit-profile/edit-profile"
import { MyAdsPage } from '../my-ads/my-ads';

import { FirebaseProvider } from '../../providers/firebase/firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Data } from '../../providers/data/data';
import { Profile } from '../../models/profile';
import { Observable } from 'rxjs/Observable';



/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  profileData: Observable<Profile>;
  isConnected: boolean = false;
  profileUid: String;
  user;
  form;
  test;


  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public fireBaseProvider: FirebaseProvider,
    public data: Data, public navCtrl: NavController, public navParams: NavParams) {

    this.user = {};
    data.getMainUser().subscribe(data =>
      {
        this.user = data.user[0];
      });
   /* data.saveUser(this.user);
    this.form = {
      information: "",
      champs: ""
    };
    this.fireBaseProvider.getEventItems().subscribe( data => {
      this.user = data;
    })
    */
  }

  ionViewWillLoad() {
    this.afAuth.authState.take(1).subscribe(data => {
      if(data && data.uid){
        this.isConnected = true;
        this.profileData = this.afDatabase.object(`profile/${data.uid}`).valueChanges();
        this.profileUid = data.uid;
      }
    });
  }

  clickedBrushIcon(event: Event) {
    this.navCtrl.push(EditProfilePage);
  }

  goToConnect() {
    this.navCtrl.setRoot(ConnectPage);
  }

  goToMyAds() {
    this.navCtrl.setRoot(MyAdsPage, {profileUid: this.profileUid});
  }

  logout() {
    this.afAuth.auth.signOut();
    this.navCtrl.setRoot(ProfilPage);
  }

}
