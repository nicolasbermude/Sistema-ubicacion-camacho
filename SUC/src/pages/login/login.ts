import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  chVal: string;
  choosenNumberValue: any;
  response_number: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.soapCall();
  }

  soapCall() {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://localhost/webservices/voltage-info-services/wsdl/sgcc3.wsdl', true);
    var input_element = <HTMLInputElement> document.getElementById("choosenNumber");
    console.log("chVal : " + this.chVal);
    this.choosenNumberValue = this.chVal;
    //the following variable contains my xml soap request (that you can get thanks to SoapUI for example)
    var sr =
        `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://WEBSERVICE_UNIAJC/">
          <soapenv:Header/>
          <soapenv:Body>
              <web:autenticarUsuario_MedianteCredenciales_SMART_CAMPUS>
                <!--Optional:-->
                <usuario>jdhalinrueda</usuario>
                <!--Optional:-->
                <pass>QWxwaGE1MjYwamRybA==</pass>
                <MantenerSesionactiva>?</MantenerSesionactiva>
                <!--Optional:-->
                <nombreApp>SIUT</nombreApp>
                <!--Optional:-->
                <claveApp>U0lVVDIwMTc=</claveApp>
              </web:autenticarUsuario_MedianteCredenciales_SMART_CAMPUS>
          </soapenv:Body>
        </soapenv:Envelope>`;

    xmlhttp.onreadystatechange =  () => {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                var xml = xmlhttp.responseXML;
                this.response_number = parseInt(xml.getElementsByTagName("return")[0].childNodes[0].nodeValue); //Here I'm getting the value contained by the <return> node
                console.log(this.response_number); //I'm printing my result square number
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.responseType = "document";
    xmlhttp.send(sr);
  }

}
