import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingListProvider } from '../../providers/shopping-list/shopping-list';
import { Observable } from 'rxjs/Observable';
import { DetailsPage } from '../details/details';
import { Item } from '../../models/item';

/**
 * Generated class for the MarketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-market',
  templateUrl: 'market.html',
})
export class MarketPage {

  shoppingList$: Observable<Item[]>;

  constructor(private shopping: ShoppingListProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.shoppingList$ = this.shopping
      .getShoppingList()
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
