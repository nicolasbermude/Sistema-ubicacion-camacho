import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';


/**
 * Generated class for the EventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html',
})
export class EventoPage {
  eventos;

  constructor(public navCtrl: NavController, public navParams: NavParams, public EventoProvider: EventoProvider) {
  
    this.getevento();

  }

  getevento(){

    this.EventoProvider.getevento().then(data =>{

      this.eventos = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoPage');
  }

}
