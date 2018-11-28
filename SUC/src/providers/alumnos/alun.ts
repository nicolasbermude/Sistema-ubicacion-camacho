import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunProvider {
  baseUrl:string = "localhost:8090/uniajc/alumnos?documentoIdentidad=";

  constructor(public http: HttpClient) {
    console.log('Hello AlunProvider Provider');
  }

  getalum(pegeid) {

    return new Promise(resolve => {

      this.http.get(this.baseUrl + pegeid).subscribe(data =>{

        resolve(data);
      }, err =>{

        console.log(err);
      })
    })
  }
}
