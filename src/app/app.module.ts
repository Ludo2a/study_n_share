import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Data } from '../providers/data/data';
import { IonicStorageModule } from '@ionic/storage';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { ShoppingListProvider } from '../providers/shopping-list/shopping-list';


const firebaseConfig = {
  apiKey: "AIzaSyDFeSiS6exL_T82s8HdZsfgSTdOjr-ZaVg",
    authDomain: "study-41937.firebaseapp.com",
    databaseURL: "https://study-41937.firebaseio.com",
    projectId: "study-41937",
    storageBucket: "study-41937.appspot.com",
    messagingSenderId: "371326923844"
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data,
    FirebaseProvider,
    ShoppingListProvider
  ]
})
export class AppModule {}
