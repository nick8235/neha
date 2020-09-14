import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';
import{AuthServiceService} from '../../services/auth-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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
  public loginForm: FormGroup;
  public submitAttempt: boolean = false;
  public loginError: boolean = false;
  email: any;
  password: string = '';
  public type = 'password';
   showPass: boolean;
   rememberMe: false;
  registerForm: any;
  

  constructor(
   
   public service: AuthServiceService,public router:Router,public formBuilder: FormBuilder,) {
    
    this.loginForm = formBuilder.group({
     
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],

      password: ['', Validators.compose([Validators.minLength(8),
      Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
  });
  }
  ngOnInit(): void {
  }

 
  

    showPassword() {
      this.showPass = !this.showPass;
  
      if (this.showPass) {
        this.type = 'text';
      } else {
        this.type = 'password';
      }
    }

    loginUser() {
      this.submitAttempt = true;
    if (!this.loginForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.loginForm.value)
    
      const data = {
        
         email:this.email,
         password:this.password,
            
           
      };
      console.log(data)
      this.service.login(data).subscribe((res) => {
        console.log(res);
        var result: any = res;
        if (result.length !== 0) {
          // localStorage.setItem('userId', result[0].userId);
          // localStorage.setItem('firstName', result[0].firstName);
          // localStorage.setItem('userType', result[0].userType);
          this.router.navigateByUrl('/dashboard');
        }
    //     else {
    //       this.service.presentToast("Error occured while signup.");
    //     }
    });
  }
  
}
formRegister(){
  this.router.navigateByUrl('/signup');

}
}