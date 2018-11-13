import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { EventoPage } from '../evento/evento';
import { CreareventoPage } from '../crearevento/crearevento';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {


  constructor(public navCtrl: NavController, 
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController
  ) { }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Opciones',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Ir al salon',
          role: 'salon',
          icon: !this.platform.is('ios') ? 'map' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Chat',
          icon: !this.platform.is('ios') ? 'chatboxes' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Eventos',
          icon: !this.platform.is('ios') ? 'bookmark' : null,
          handler: () => {
            this.navCtrl.push(EventoPage);
            console.log('Play clicked');
          }
        },
        {
          text: 'Silenciar',
          icon: !this.platform.is('ios') ? 'notifications-off' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Crear Evento',
          icon: !this.platform.is('ios') ? 'create' : null,
          handler: () => {
            this.navCtrl.push(CreareventoPage);
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}

 /* constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }*/

