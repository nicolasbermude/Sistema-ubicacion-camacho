import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { EventoPage } from '../evento/evento';
import { CreareventoPage } from '../crearevento/crearevento';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  identificacion;
  listDatos;

  constructor(public navParams: NavParams, public navCtrl: NavController, public platform: Platform, public actionsheetCtrl: ActionSheetController) { 

    this.identificacion = navParams.get('identificacion');
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Opciones',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        /* {
          text: 'Ir al salon',
          role: 'salon',
          icon: !this.platform.is('ios') ? 'map' : null,
          handler: () => {
            console.log('Clic ruta al salón');
          }
        },
        {
          text: 'Chat',
          icon: !this.platform.is('ios') ? 'chatboxes' : null,
          handler: () => {
            console.log('Clic chat');
          }
        }, */
        {
          text: 'Eventos',
          icon: !this.platform.is('ios') ? 'bookmark' : null,
          handler: () => {
            this.navCtrl.push(EventoPage);
            console.log('Clic evento');
          }
        },
        /* {
          text: 'Silenciar',
          icon: !this.platform.is('ios') ? 'notifications-off' : null,
          handler: () => {
            console.log('Clic silenciar');
          }
        }, */
        {
          text: 'Crear Evento',
          icon: !this.platform.is('ios') ? 'create' : null,
          handler: () => {
            this.navCtrl.push(CreareventoPage);
            console.log('Clic crear evento');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Clic canlelar');
          }
        }
      ]
    });
    
    actionSheet.present();
  }
}