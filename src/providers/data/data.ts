import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Data {


  userProfile: any;

  constructor(public http: HttpClient, public storage: Storage) {
    this.userProfile = [];
  }


  getFeedList(): Observable<any>{
    if(this.feedList.length == 0) {
      return Observable.fromPromise(this.storage.get('feedList')).mergeMap( (val: any) => {
          if(val == null || val.feed == null) {
            return this.http.get("assets/data.json").pipe(
              tap( (res: any) => {
                this.feedList = res.feed;
              })
            );
          }
          else {
            this.feedList = val.feed;
            return of({ feed:this.feedList });
          }
        });
    }
    else {
      return of({ feed:this.feedList });
    }

}

