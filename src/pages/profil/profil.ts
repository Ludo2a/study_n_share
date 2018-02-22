import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConnectPage } from '../connect/connect';
import { RegisterPage } from '../register/register';

import { FirebaseProvider } from '../../providers/firebase/firebase';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Data } from '../../providers/data/data';
import { User } from '../../models/user';



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

  profileData: FirebaseObjectObservable<User>
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
    data.saveUser(this.user);
    this.form = {
      information: "",
      champs: ""
    };
    this.fireBaseProvider.getEventItems().subscribe( data => {
      this.user = data;
    })
  }

  ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(data => {
      if(data && data.uid){
        this.profileData = this.afDatabase.object(`user/${data.uid}`)
      }
    })

  }

  clickedBrushIcon(event: Event) {
    this.navCtrl.setRoot(RegisterPage);
  }
  clickedBrushIcon2(event: Event) {
    this.showInputBar2 = !this.showInputBar2;
    this.form.champs = 2;
  }
  clickedBrushIcon3(event: Event) {
    this.showInputBar3 = !this.showInputBar3;
    this.form.champs = 3;
  }
  clickedBrushIcon4(event: Event) {
    this.showInputBar4 = !this.showInputBar4;
    this.form.champs = 4;
  }

  valider(form) {
    switch(form.champs) {
      case 1: {
        this.user.user_lol = form.information;
        this.data.saveUser(this.user);
        form.information = "";
        this.showInputBar1 = !this.showInputBar1;
        break;
      }
      case 2: {
        this.user.user_purpose = form.information;
        this.data.saveUser(this.user);
        form.information = "";
        this.showInputBar2 = !this.showInputBar2;
        break;
      }
      case 3: {
        this.user.user_contact = form.information;
        this.data.saveUser(this.user);
        form.information = "";
        this.showInputBar3 = !this.showInputBar3;
        break;
      }
      case 4: {
        this.user.user_institution = form.information;
        this.data.saveUser(this.user);
        form.information = "";
        this.showInputBar4 = !this.showInputBar4;
        break;
      }
      default : {
        break;
      }
    }
  }

    goToConnect() {
      this.navCtrl.setRoot(ConnectPage);
    }

}
