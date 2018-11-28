import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlumnoProvider } from '../../providers/alumno/alumno';

@IonicPage()
@Component({
  selector: 'page-alumno',
  templateUrl: 'alumno.html',
})
export class AlumnoPage {

  codigogrupo;
  codigomateria;

  listalumnos;

  constructor(public navCtrl: NavController, public navParams: NavParams, public AlumnoProvider: AlumnoProvider) {

    this.codigogrupo = navParams.get('codigogrupo');
    this.codigomateria = navParams.get('codigomateria');
    this.getAlumnos(this.codigogrupo, this.codigomateria);
  }

  getAlumnos(codigogrupo, codigomateria) {

    this.AlumnoProvider.getAlumnos(codigogrupo, codigomateria).then(data => {

      this.listalumnos = data;
    })
  }
}
