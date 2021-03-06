
import { FavoritosPage } from './../pages/favoritos/favoritos';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PlacesProvider } from '../providers/places/places';
import { UsuarioProvider } from './../providers/usuario/usuario';

import { HttpClient } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 

import { IonicStorageModule } from "@ionic/storage";

import { SuperTabsModule } from "ionic2-super-tabs";

import { IonicImageViewerModule } from "ionic-img-viewer";



/*
* NATIVE LIBRARIES
*
*/
import { Geolocation } from "@ionic-native/geolocation";

import {  CategoriesPage,
          HomePage,
          ForgotpasswordPage,
          HowtogetPage,
          IntroductionPage,
          LoginPage,
          NextomePage,
          PlaceprofilePage,
          RegisterPage,
          SearchplacePage,
          TabsPage,
          PercategoriesPage  
        } from "../pages/index.pages";
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { IniciarsesionPage } from '../pages/iniciarsesion/iniciarsesion';
import { LogueoPage } from '../pages/logueo/logueo';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ForgotpasswordPage,
    ListPage,
    CategoriesPage,
    HowtogetPage,
    IntroductionPage,
    LoginPage,
    NextomePage,
    PlaceprofilePage,
    RegisterPage,
    SearchplacePage,
    TabsPage,
    PercategoriesPage,
    FavoritosPage,
    IniciarsesionPage,
    LogueoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    SuperTabsModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CategoriesPage,
    ForgotpasswordPage,
    HowtogetPage,
    IntroductionPage,
    LoginPage,
    NextomePage,
    PlaceprofilePage,
    RegisterPage,
    SearchplacePage,
    TabsPage,
    PercategoriesPage,
    FavoritosPage,
    IniciarsesionPage,
    LogueoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlacesProvider,
    HttpModule,
    HttpClient,
    Geolocation,
    UsuarioProvider,
    Storage,
    FavoritosProvider
  ]
})
export class AppModule {}
