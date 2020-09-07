import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';
import{AuthServiceService} from '../../services/auth-service.service';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */




@Component({
  selector: 'app-login',
templateUrl: './login.page.html',
 styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';
  public type = 'password';
   showPass: boolean;
   rememberMe: false;

  constructor(
   
   public services: AuthServiceService,public router:Router) {
    
    
  }
  ngOnInit(): void {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  formRegister() {
    this.router.navigate(['/signup']);
  }
  async proseslogin() {
    
    this.router.navigate(['/dashboard']);

    }


    showPassword() {
      this.showPass = !this.showPass;
  
      if (this.showPass) {
        this.type = 'text';
      } else {
        this.type = 'password';
      }
    }
  }

