import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { InicioPage } from '../pages/inicio/inicio';
import { LugaresPage } from '../pages/lugares/lugares';
import { RutaLugaresPage } from '../pages/ruta-lugares/ruta-lugares';
import { NotasPage } from '../pages/notas/notas';
import { EventoPage } from '../pages/evento/evento';
import { CreareventoPage } from '../pages/crearevento/crearevento';

import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { CerrarSesionPage } from '../pages/cerrar-sesion/cerrar-sesion';

import { Geolocation } from '@ionic-native/geolocation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LugarProvider } from '../providers/lugar/lugar';
import { HttpClientModule } from '@angular/common/http';
import { EventoProvider } from '../providers/evento/evento';
import { LoginProvider } from '../providers/login/login';
import { MateriaProvider } from '../providers/materia/materia';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    InicioPage,
    LugaresPage,
    RutaLugaresPage,
    NotasPage,
    EventoPage,
    CreareventoPage,
    AcercaDePage,
    CerrarSesionPage,
    MateriaProvider
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    InicioPage,
    LugaresPage,
    RutaLugaresPage,
    NotasPage,
    EventoPage,
    CreareventoPage,
    AcercaDePage,
    CerrarSesionPage,
    MateriaProvider

  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LugarProvider,
    EventoProvider,
    LoginProvider,
    MateriaProvider
  ]
})
export class AppModule {}
