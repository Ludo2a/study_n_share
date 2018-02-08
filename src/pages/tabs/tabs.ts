import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilPage } from '../profil/profil';
import { AddPage } from '../add/add';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilPage;
  tab2Root = MapPage;
  tab3Root = AddPage;
  tab4Root = ContactPage;
  tab5Root = HomePage;

  constructor() {

  }
}
