import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { InicioPage } from '../pages/inicio/inicio';
import { LugaresPage } from '../pages/lugares/lugares';
import { NotasPage } from '../pages/notas/notas';
import { EventoPage } from '../pages/evento/evento';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { CerrarSesionPage } from '../pages/cerrar-sesion/cerrar-sesion';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  
  rootPage: any = EventoPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: InicioPage },
      { title: 'Lugares', component: LugaresPage },
      { title: 'Notas', component: NotasPage },
      { title: 'Acerda De', component: AcercaDePage },
      { title: 'Cerrar Sesión', component: CerrarSesionPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
