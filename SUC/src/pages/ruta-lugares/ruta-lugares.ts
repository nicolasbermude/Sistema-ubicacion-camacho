import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-ruta-lugares',
  templateUrl: 'ruta-lugares.html',
})
export class RutaLugaresPage {

  latitud = 0;
  longitud = 0;
  lugar = '';
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {

    this.latitud = navParams.get('latitud');
    this.longitud = navParams.get('longitud');
    this.lugar = navParams.get('lugar');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RutaLugaresPage');
    this.CargarMapa();
  }

  CargarMapa(){

    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      //this.addMarker();
      this.IniciarNavegacion(position.coords.latitude, position.coords.longitude);
 
    }, (err) => {
      console.log(err);
    });
  }

  IniciarNavegacion(origen, destino){
 
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;

    directionsDisplay.setMap(this.map);
    directionsDisplay.setPanel(this.directionsPanel.nativeElement);

    directionsService.route({
        origin: {lat: origen, lng: destino},
        destination: {lat: this.latitud, lng: this.longitud},
        travelMode: google.maps.TravelMode['WALKING']
    }, (res, status) => {

        if(status == google.maps.DirectionsStatus.OK){
            directionsDisplay.setDirections(res);
        } else {
            console.warn(status);
        }

    });
  }
}
