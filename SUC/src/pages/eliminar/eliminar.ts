import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';

/**
 * Generated class for the EliminarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eliminar',
  templateUrl: 'eliminar.html',
})
export class EliminarPage {
  eventoid;
  evento: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public EventoProvider: EventoProvider) {
  this.eventoid=this.navParams.get('id');
  this.getevento(this.eventoid)
  }

  getevento(id) {
    this.EventoProvider.geteventos(id).then(data => {
      this.evento = data;
      console.log(data);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EliminarPage');
  }

  ionViewWillEnter() {
    this.eventoid = this.navParams.get('id');
    this.getevento(this.eventoid);
  }


  delete() {
    this.EventoProvider.removeevento(this.eventoid).then(data => {
      this.navCtrl.pop();
    })
  }

}
