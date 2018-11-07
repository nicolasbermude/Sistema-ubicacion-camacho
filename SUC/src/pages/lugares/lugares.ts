import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RutaLugaresPage } from '../ruta-lugares/ruta-lugares';

/**
 * Generated class for the LugaresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugares',
  templateUrl: 'lugares.html',
})
export class LugaresPage {

  latitud = 3.332870;
  longitud = -76.523907;
  lugar = 'ParqueSoft';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugaresPage');
  }

  rutaLugares():void{

    this.navCtrl.push(RutaLugaresPage, {latitud:this.latitud, longitud:this.longitud, lugar:this.lugar});
  }

}
