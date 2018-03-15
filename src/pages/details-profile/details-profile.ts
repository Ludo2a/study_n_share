import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Profile } from '../../models/profile';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';




/**
 * Generated class for the DetailsProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-profile',
  templateUrl: 'details-profile.html',
})
export class DetailsProfilePage {

  profileData: Observable<Profile>;
  userUid: string;

  constructor(private db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.userUid = navParams.get('userUid')
    this.profileData = this.db.object<Profile>(`profile/${this.userUid}`).valueChanges();
  }


}
