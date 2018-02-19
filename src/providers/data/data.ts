
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Data {


  user: any;

  constructor(public http: HttpClient, public storage: Storage) {
    this.user = [];
  }


  getMainUser(): Observable<any>{
    if(this.user.length == 0) {
      return Observable.fromPromise(this.storage.get('mainUser')).mergeMap( (val: any) => {
        if(val == null || val.user == null) {
          return this.http.get("assets/data.json").pipe(
            tap( (res: any) => {
              this.user = res.user;
            })
          );
        }
        else {
          this.user = val.user;
          return of({ user:this.user });
        }
      });
  }
    else {
      return of({ user:this.user });
    }
  }

  addUserToList(user) {
    this.user.push(user);
    this.saveUserList();
}

  saveUser(user) {
    this.storage.set('mainUser', user);
  }

  saveUserList() {
    this.storage.set('mainUser', {"user": this.user});
  }

}

