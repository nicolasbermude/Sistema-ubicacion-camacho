import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class MateriaProvider {

  baseUrl: string = "http://25.1.90.3:8080/UNIAJC-WS-Oracle/uniajc/";

  constructor(public http: HttpClient) {
    console.log('Provider Materia');
  }

   public getmaterias(documento){

     return new Promise(resolve => {

       this.http.get(this.baseUrl + "materia?documentoIdentidad=" + documento + "").subscribe(data => {

         resolve(data);
       }, err => {

         console.log(err);
        })
    })
  }
}
