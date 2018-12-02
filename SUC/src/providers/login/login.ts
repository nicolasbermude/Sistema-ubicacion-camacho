import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginProvider {

 /*  baseUrl:string = "http://smartdev.uniajc.edu.co:8888/UNIAJC-WS/uniajc/login?usuario="; */
  baseUrl:string = "http://localhost:8091/uniajc/login?usuario=";

  constructor(public http: HttpClient) {
    console.log('Provider Login');
  }

  public login(usuario, password) {

    return new Promise(resolve => {

      this.http.get(this.baseUrl + usuario + "&password=" + password).subscribe(data =>{

        resolve(data);
      }, err =>{

        console.log(err);
      })
    })
  }
}
