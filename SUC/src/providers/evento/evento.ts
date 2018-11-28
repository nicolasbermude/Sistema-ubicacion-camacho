import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EventoProvider {

  baseUrl:string = "http://25.58.225.74:8080/SUC-WS/suc/"; 
 
  constructor(public http: HttpClient) {

    console.log('Provider evento.');
  }
  
  getevento(idclase) {

    return new Promise(resolve => {

      this.http.get(this.baseUrl + "evento/" + idclase).subscribe(data =>{

        resolve(data);
      }, err =>{

        console.log(err);
      })
    })
  }

  addevento(evento){

    return new Promise(resolve => {

      this.http.put(this.baseUrl + "evento",evento).subscribe(data =>{

        resolve(data);
      }, err =>{

        console.log(err);
      })
    })
  }

  removeevento(idevento){
    
    return new Promise(resolve => {

      this.http.delete(this.baseUrl + "evento/" + idevento).subscribe(data =>{

        resolve(data);
      }, err =>{

        console.log(err);
      })
    })
  }

}
