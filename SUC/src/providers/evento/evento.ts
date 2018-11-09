import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EventoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventoProvider {

  baseUrl:string = "http://localhost:8090/suc/";
  
  constructor(public http: HttpClient) {
    console.log('Hello EventoProvider Provider');


  }
public getevento() {

    return new Promise(resolve => {

      this.http.get(this.baseUrl + "evento").subscribe(data =>{

        resolve(data);
      }, err =>{

        console.log(err);
      })
    })
  }
}
