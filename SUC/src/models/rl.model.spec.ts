import { RutaLugaresPage } from '../pages/ruta-lugares/ruta-lugares';
import { NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

describe("Prueba para RutaLugares", ()=>{

    describe("Prueba para RutaLugares.CargarMapa", ()=>{
  
        it("Este Metodo debe ejecutar correctamente", ()=>{

            let ruta = new RutaLugaresPage( new NavParams, new Geolocation);
            ruta.CargarMapa();
        });
    });
});