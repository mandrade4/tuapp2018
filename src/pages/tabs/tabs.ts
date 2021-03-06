import { SuperTabsModule } from 'ionic2-super-tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NextomePage, CategoriesPage, SearchplacePage, HomePage } from "../index.pages";


/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})



export class TabsPage {

  tab1:any;
  tab2:any;
  tab3:any;
  tab4:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.tab1 = HomePage;
    this.tab2 = NextomePage;
    this.tab3 = SearchplacePage;
    this.tab4 = CategoriesPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
