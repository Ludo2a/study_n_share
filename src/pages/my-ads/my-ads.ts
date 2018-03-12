import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetailsPage } from '../details/details';

import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item';
import { ShoppingListProvider } from '../../providers/shopping-list/shopping-list';

/**
 * Generated class for the MyAdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-ads',
  templateUrl: 'my-ads.html',
})
export class MyAdsPage {

  profileUid: string;
  shoppingList$: Observable<Item[]>;

  constructor(private shopping: ShoppingListProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.profileUid = this.navParams.get('profileUid');
  }

  ionViewDidLoad() {
    console.log(this.profileUid);
    this.shoppingList$ = this.shopping
      .getMyAds(this.profileUid)
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }));
      });
  }

  goToDetail(item) {
    this.navCtrl.push(DetailsPage, { item: item });
  };

}
