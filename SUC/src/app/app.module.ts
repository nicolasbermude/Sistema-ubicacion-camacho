import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { InicioPage } from '../pages/inicio/inicio';
import { LugaresPage } from '../pages/lugares/lugares';
import { NotasPage } from '../pages/notas/notas';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { CerrarSesionPage } from '../pages/cerrar-sesion/cerrar-sesion';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    InicioPage,
    LugaresPage,
    NotasPage,
    AcercaDePage,
    CerrarSesionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    InicioPage,
    LugaresPage,
    NotasPage,
    AcercaDePage,
    CerrarSesionPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
