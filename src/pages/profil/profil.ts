import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConnectPage } from '../connect/connect';
import { RegisterPage } from '../register/register';
import { EditProfilePage } from "../edit-profile/edit-profile"

import { FirebaseProvider } from '../../providers/firebase/firebase';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Data } from '../../providers/data/data';
import { Profile } from '../../models/profile';



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

  profileData: FirebaseObjectObservable<Profile>
  user;
  form;
  public showInputBar1 = false;
  public showInputBar2 = false;
  public showInputBar3 = false;
  public showInputBar4 = false;


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

  ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(data => {
      if(data && data.uid){
        this.profileData = this.afDatabase.object(`profile/${data.uid}`)
      }
    })

  }

  clickedBrushIcon(event: Event) {
    this.navCtrl.setRoot(EditProfilePage);
  }

  goToConnect() {
    this.navCtrl.setRoot(ConnectPage);
  }

}
