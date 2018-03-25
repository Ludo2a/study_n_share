import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { ShoppingListProvider } from '../../providers/shopping-list/shopping-list';

@IonicPage()
@Component({
  selector: 'page-my-ads',
  templateUrl: 'my-ads.html',
})
export class MyAdsPage {

  shoppingList$: Observable<Item[]>;

  constructor(public fire: FirebaseProvider, private shopping: ShoppingListProvider, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log(this.fire.profileUid);
    this.shoppingList$ = this.shopping
      .getMyAds(this.fire.profileUid)
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }));
      });
  }

  goToDetail(item: Item) {
    this.navCtrl.push('DetailsPage', { item: item });
  };

  goToEditItem(item: Item) {
    this.navCtrl.push('EditItemPage', { item: item });
  };

  deleteItem(item: Item) {
    this.shopping.removeMyItem(item.key)
  }
}
