import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProfilPage } from "../profil/profil";
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  profileDataEdit = {} as Profile;
  profileData: Observable<Profile>;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(data => {
      if(data && data.uid){
        this.profileData = this.afDatabase.object(`profile/${data.uid}`).valueChanges();
        this.profileData.subscribe(profileData => this.profileDataEdit = profileData);
      }
    });
    if(this.profileDataEdit.nom == null){this.profileDataEdit.nom = "à definir";}
  }
  creatProfile() {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`profile/${auth.uid}`).set(this.profileDataEdit).then(() => this.navCtrl.setRoot(ProfilPage));
    });
  }


}
