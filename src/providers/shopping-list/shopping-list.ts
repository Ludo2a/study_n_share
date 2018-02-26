import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Item } from '../../models/item'

/*
  Generated class for the ShoppingListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
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
}
