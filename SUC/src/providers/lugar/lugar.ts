import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LugarProvider {

  baseUrl:string = "http://localhost:8090/suc/";

  constructor(public http: HttpClient) {
    
    console.log('Priver Lugar');
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
