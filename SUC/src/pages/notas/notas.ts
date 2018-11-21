import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class NotasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    window.open("https://play.google.com/store/apps/details?id=com.notas.uniajc&hl=es");
    console.log('ionViewDidLoad NotasPage');
  }
}
