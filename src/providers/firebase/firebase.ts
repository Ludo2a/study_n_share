import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from "../../models/user";
import { Profile } from '../../models/profile';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class FirebaseProvider {

  profileData: Observable<Profile>;
  isConnected: boolean = false;
  profileUid: string;

  constructor( private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,) {
    console.log('Hello FirebaseProvider Provider');

    this.afAuth.authState.take(1).subscribe(data => {
      if(data && data.uid){
        this.isConnected = true;
        this.profileData = this.afDatabase.object(`profile/${data.uid}`).valueChanges();
        this.profileUid = data.uid;
      }
    });
  }

  logout() {
    this.isConnected=false;
    this.afAuth.auth.signOut();
  }



}
