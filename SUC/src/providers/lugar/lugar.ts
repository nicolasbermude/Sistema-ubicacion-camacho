import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LugarProvider {

  baseUrl:string = "http://25.58.225.74:8080/SUC-WS/suc/";

  constructor(public http: HttpClient) {
    
    console.log('Provider Lugar');
  }

  public getLugares() {

    return new Promise(resolve => {

      this.http.get(this.baseUrl + "lugar").subscribe(data =>{

        resolve(data);
      }, err =>{

        console.log(err);
      })
    })
  }
}
