import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Profile } from '../../models/profile';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ShoppingListProvider } from '../../providers/shopping-list/shopping-list';
import { MarketPage } from '../market/market';

import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  profileDataEdit = {} as Profile;
  profileData: Observable<Profile>;
  item : Item = {
    nom: "",
    prix: undefined,
    owner: "test"
  };

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, private shopping: ShoppingListProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  addItem(item: Item) {
    this.afAuth.authState.take(1).subscribe(data => {
        this.profileData = this.afDatabase.object(`profile/${data.uid}`).valueChanges();
        this.item.owner = data.uid;
        this.shopping.addItem(item).then(ref => {
          this.navCtrl.setRoot(MarketPage, { key: ref.key});
        });
    });
  }

}

