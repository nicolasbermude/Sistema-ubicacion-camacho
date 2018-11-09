import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RutaLugaresPage } from '../ruta-lugares/ruta-lugares';
import { LugarProvider } from '../../providers/lugar/lugar';

@IonicPage()
@Component({
  selector: 'page-lugares',
  templateUrl: 'lugares.html',
})
export class LugaresPage {

  listlugares;

  constructor(public navCtrl: NavController, public navParams: NavParams, public lugarProvider: LugarProvider) {

    this.getLugares();
  }

  getLugares(){

    this.lugarProvider.getLugares().then(data =>{

      this.listlugares = data;
    })
  }

  rutaLugares(latitud, longitud, lugar):void{

    this.navCtrl.push(RutaLugaresPage, {latitud: latitud, longitud: longitud, lugar: lugar});
  }

}
