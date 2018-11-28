import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { EventoPage } from '../evento/evento';
import { CreareventoPage } from '../crearevento/crearevento';
import { MateriaProvider } from '../../providers/materia/materia';
import {  AlunProvider } from '../../providers/alumnos/alun';
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  identificacion;
  listmaterias;
  Alum;
  pegeid;

  constructor(public navParams: NavParams, public navCtrl: NavController, public platform: Platform,
     public actionsheetCtrl: ActionSheetController,
      public MateriaProvider: MateriaProvider,public AlunProvider:AlunProvider) {

        this.identificacion = navParams.get('identificacion');
        this.getmaterias(this.identificacion);
        this.getalum(this.pegeid);
      }


  getmaterias(identificacion) {

    this.MateriaProvider.getmaterias(identificacion).then(data => {

      this.listmaterias = data;
    })

  }
  getalum(pegeid){

    this.AlunProvider.getalum(pegeid).then(data =>{

      this.Alum = data;
    })
  }

  openMenu(idclase) {
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
            this.navCtrl.push(EventoPage, {idclase: idclase});
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
            this.navCtrl.push(CreareventoPage, {idclase: idclase});
            console.log('Clic crear evento');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Clic cancelar');
          }
        }
      ]

    });

    actionSheet.present();
  }
}
