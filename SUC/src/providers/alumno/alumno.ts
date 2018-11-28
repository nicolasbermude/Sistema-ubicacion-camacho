import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AlumnoProvider {

  baseUrl: string = "http://25.1.90.3:8080/UNIAJC-WS-Oracle/uniajc/";

  constructor(public http: HttpClient) {
    console.log('Provider Alumno');
  }

  getAlumnos(codigogrupo, codigomateria) {

    return new Promise(resolve => {

      this.http.get(this.baseUrl + "URL" + codigogrupo + "URL" + codigomateria).subscribe(data =>{

        resolve(data);
      }, err =>{

        console.log(err);
      })
    })
  }
}
