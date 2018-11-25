import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { InicioPage } from '../inicio/inicio';

/**
 * Generated class for the CerrarSesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cerrar-sesion',
  templateUrl: 'cerrar-sesion.html',
})
export class CerrarSesionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public alerta:AlertController,public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad alerta.html');
  }

  alertaBasica(){
    let miAlerta = this.alerta.create({
      title:'Desea cerrar sesion',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes selected');
            this.navCtrl.push(LoginPage)
          }
        },
        {
          text: 'No',   
          }
      ]
    });
    miAlerta.present()
  }
  /*exitApp(){
    this.platform.exitApp();
 }*/
  
}
