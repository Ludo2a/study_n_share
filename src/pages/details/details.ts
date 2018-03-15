import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

declare var google;
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  @ViewChild('map') mapElement: ElementRef;

  map: any;
  item: Item;
  user: Observable<any>;

  constructor(private db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
    this.user = this.getUserFromUID(this.item.owner);
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  getUserFromUID(uid: string){
    return this.db.object(`profile/${this.item.owner}`).valueChanges();
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
