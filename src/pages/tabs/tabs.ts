import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'ProfilePage';
  tab2Root = 'MapPage';
  tab3Root = 'AddPage';
  tab4Root = 'ContactPage';
  tab5Root = 'MarketPage';

  constructor() {

  }
}
