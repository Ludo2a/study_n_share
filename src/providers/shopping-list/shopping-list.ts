import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Item } from '../../models/item'


@Injectable()
export class ShoppingListProvider {

  constructor(private db: AngularFireDatabase) {
  }

  private shoppingListRef = this.db.list<Item>('shopping-list');

  getShoppingList() {
    return this.shoppingListRef;
  }

  addItem(item: Item) {
    return this.shoppingListRef.push(item);
  }

  removeMyItem(key: string) {
    return this.db.list<Item>('shopping-list').remove(key).catch(error => this.handleError(error));
  }

  editMyAd(key: string, item: Item) {
    return this.db.object<Item>(`shopping-list/${key}`).update(item).catch(error => this.handleError(error));;
  }

  getMyAds(uid: string){
    return this.db.list<Item>('shopping-list', ref => ref.orderByChild('owner').equalTo(uid));
  }

  private handleError(error) {
    console.log(error);
  }
}
