import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MapPage } from '../pages/map/map';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilPage } from '../pages/profil/profil';
import { AddPage } from '../pages/add/add';
import { ConnectPage } from '../pages/connect/connect';
import { DetailsPage } from '../pages/details/details';
import { RegisterPage } from '../pages/register/register';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { MarketPage } from '../pages/market/market';
import { MyAdsPage } from '../pages/my-ads/my-ads';

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
    MapPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProfilPage,
    AddPage,
    ConnectPage,
    DetailsPage,
    RegisterPage,
    EditProfilePage,
    MarketPage,
    MyAdsPage
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
    MapPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProfilPage,
    AddPage,
    ConnectPage,
    DetailsPage,
    RegisterPage,
    EditProfilePage,
    MarketPage,
    MyAdsPage
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
