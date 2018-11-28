import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Loading, AlertController  } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { InicioPage } from '../../pages/inicio/inicio';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  chVal: string;
  choosenNumberValue: any;
  response_number: number;
  splash = true;
  tabBarElement: any;

  listlogin;
  dato;
  identificacion;
  pegeid;
  public loading:Loading;
  myForm: FormGroup;

  constructor(public navCtrl: NavController, public loginProvider: LoginProvider, public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    
    this.myForm = this.formBuilder.group({

      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){

    this.loginProvider.login(this.myForm.value.usuario, btoa(this.myForm.value.password)).then(data =>{

      this.listlogin = data;
      this.dato = this.listlogin[0];

      try {

        this.identificacion = this.dato["identificacion"];
        this.pegeid = this.dato["usuario"];
        this.navCtrl.setRoot(InicioPage, {identificacion: this.identificacion, pegeid: this.pegeid});
      }catch(error) {

        console.error(error);
        this.alertaError();
      }
    })

    this.loading = this.loadingCtrl.create({

      dismissOnPageChange: true,
    });

    this.loading.present();

    setTimeout(() => {
      
      this.loading.dismiss();
    }, 5000);
  }

  ionViewDidLoad() {

    setTimeout(() => {

      this.splash = false;
    }, 2800);
  }

  alertaError() {

    let alert = this.alertCtrl.create({

      title: 'ERROR',
      subTitle: 'Usted a ingresado un usuario o contraseña invalidos.',
      buttons: ['Aceptar']
    });
    
    alert.present();
  }
}
