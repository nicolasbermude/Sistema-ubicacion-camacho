import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';

/**
 * Generated class for the CreareventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crearevento',
  templateUrl: 'crearevento.html',
})
export class CreareventoPage {

titulo :string="";
mensaje :string="";


fechainicio; 
fechafin ;
hora;

  constructor(public navCtrl: NavController, public navParams: NavParams, public EventoProvider: EventoProvider) {
  }

  ionViewDidLoad() {
    this.fechainicio= new Date();
    this.fechafin= new Date();
  }
addevento(){ 
 
 let evento = {
  titulo : this.titulo,
  mensaje : this.mensaje,
  fechainicio: this.fechainicio,
  fechafin: this.fechafin,
  hora:this.hora
 }
 if(this.titulo !== '',this.mensaje !== '',this.fechainicio !== '',this.fechafin !== '',this.fechafin !== ''){

  this.EventoProvider.addevento(evento).then(data =>{
    console.log(data);
    
      })

 }
 
}


}
