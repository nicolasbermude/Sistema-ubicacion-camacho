import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';
import { Platform, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html',
})
export class EventoPage {
  eventos;
  idclase;

  constructor(public navCtrl: NavController, public navParams: NavParams, public EventoProvider: EventoProvider,  public platform: Platform,
    public actionsheetCtrl: ActionSheetController) {
  
      this.idclase = navParams.get('idclase');
      this.getevento(this.idclase);
  }

  getevento(idclase){

    this.EventoProvider.getevento(idclase).then(data =>{

      this.eventos = data;
    })
  }

  deleteevento(idevento) {

    this.EventoProvider.removeevento(idevento).then(data => {

      this.navCtrl.pop();
    })
  }

  openMenu(idevento) {

    let actionSheet = this.actionsheetCtrl.create({

      title: 'Opciones',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Eliminar',
          icon: !this.platform.is('ios') ? 'create' : null,
          handler: () => {

            console.log('Click en eliminar.');
            this.deleteevento(idevento);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {

            console.log('Click en cancelar.');
          }
        }
      ]
    });

    actionSheet.present();
  }
}
