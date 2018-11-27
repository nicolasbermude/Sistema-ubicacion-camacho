import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';

@IonicPage()
@Component({
  selector: 'page-crearevento',
  templateUrl: 'crearevento.html',
})
export class CreareventoPage {

  titulo: string = "";
  mensaje: string = "";
  fechainicio;
  fechafin;
  hora;
  idclase;

  dateNow : Date = new Date();
  dateNowISO = this.dateNow.toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams, public EventoProvider: EventoProvider) {

    this.idclase = navParams.get('idclase');
  }

  ionViewDidLoad() {

    this.fechainicio = new Date();
    this.fechafin = new Date();
  }

  addevento() {

    let evento = {
      titulo: this.titulo,
      idclase: this.idclase,
      mensaje: this.mensaje,
      fechainicio: this.fechainicio,
      fechafin: this.fechafin,
      hora: this.hora,
      fecha: this.dateNowISO,
      estado: true
    }

    if (this.titulo !== '', this.mensaje !== '', this.fechainicio !== '', this.fechafin !== '', this.hora !== '') {

      this.EventoProvider.addevento(evento).then(data => {

        console.log(data);
      })

      this.navCtrl.pop();
    }
  }
}
