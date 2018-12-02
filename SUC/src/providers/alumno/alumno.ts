import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AlumnoProvider {

  baseUrl: string = "http://localhost:8092/uniajc/";

  constructor(public http: HttpClient) {
    console.log('Provider Alumno');
  }

  getAlumnos(codigogrupo, codigomateria) {

    return new Promise(resolve => {

      this.http.get(this.baseUrl + "materia?gruponombre=" + codigogrupo + "&codigomateria=" + codigomateria).subscribe(data =>{

        resolve(data);
      }, err =>{

        console.log(err);
      })
    })
  }
}
