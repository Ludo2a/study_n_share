import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { Profile } from '../../models/profile';
import { Item } from '../../models/item';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

declare var google;

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  @ViewChild('map') mapElement: ElementRef;

  map: any;
  item: Item;
  user: Observable<Profile>;


  constructor(private db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
    this.user = this.db.object<Profile>(`profile/${this.item.owner}`).valueChanges();
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  goToDetailProfile() {
    this.navCtrl.push('DetailsProfilePage', {userUid: this.item.owner});
  }


  loadMap(){

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

}
