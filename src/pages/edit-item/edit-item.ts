import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { ShoppingListProvider } from '../../providers/shopping-list/shopping-list';


@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {

  item: Item;

  constructor(private shopping: ShoppingListProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
  }

  updateItem() {
    this.shopping.editMyAd(this.item.key, this.item);
    this.navCtrl.setRoot('ProfilePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditItemPage');
  }

}
