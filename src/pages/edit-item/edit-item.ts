import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfilPage } from "../profil/profil";
import { Item } from '../../models/item';
import { ShoppingListProvider } from '../../providers/shopping-list/shopping-list';


/**
 * Generated class for the EditItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    this.navCtrl.setRoot(ProfilPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditItemPage');
  }

}
