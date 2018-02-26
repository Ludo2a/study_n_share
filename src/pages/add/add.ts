import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { ShoppingListProvider } from '../../providers/shopping-list/shopping-list';
import { MarketPage } from '../market/market'

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

  item : Item = {
    nom: "",
    prix: undefined
  };

  constructor(private shopping: ShoppingListProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  addItem(item: Item) {
    this.shopping.addItem(item).then(ref => {
      this.navCtrl.setRoot(MarketPage, { key: ref.key});
    });
  }

}
