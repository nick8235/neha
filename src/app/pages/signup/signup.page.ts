import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public registerForm: FormGroup;
  public submitAttempt: boolean = false;
  public loginError: boolean = false;
  public loginMessage
userId:'number';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  city: string = '';
  dob: string = '';
  country: string = '';
  usertype:string='';
  constructor(private router: Router, public service: AuthServiceService,
  	public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,) {
      this.registerForm = formBuilder.group({
        firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],

        lastName: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],

        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],


        birthday: ['',Validators.required],

        gender: ['',Validators.required],

        password: ['', Validators.compose([Validators.minLength(8), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],

        country: ['', Validators.compose([ Validators.required])]
       
    });
     }
     getDate(e) {
      let date = new Date(e.target.value).toISOString().substring(0, 10);
      this.registerForm.get('dob').setValue(date, {
        onlyself: true
      })
    }
  ngOnInit() {
  }
 
   addRegister() {
    this.submitAttempt = true;
  if (!this.registerForm.valid) {
    console.log('Please provide all the required values!')
    return false;
  } else {
    console.log(this.registerForm.value)
  
    const data = {
       userId:this.userId,
       firstName:this.firstName,
       lastName:this.lastName,
       email:this.email,
       password:this.password,
       country:this.country,
       city:this.city,
       dob:this.dob,
       userType:this.usertype,    
         
    };
    console.log(data)
    this.service.signUp(data).subscribe((res) => {
      console.log(res);
      var result: any = res;
      if (result.length !== 0) {
        // localStorage.setItem('userId', result[0].userId);
        // localStorage.setItem('firstName', result[0].firstName);
        // localStorage.setItem('userType', result[0].userType);
        this.service.presentToast("Signup successful.");
        this.router.navigateByUrl('/dashboard');
      }
  //     else {
  //       this.service.presentToast("Error occured while signup.");
  //     }
  });
  // }
//   else {
//     //this.presentToast("Enter all required fields.");
//   }
// }
//     this.service.signUp(data).subscribe(r => {
       
      
//       console.log(r);
      
//       this.router.navigate(['/login']);
//     })
//   }

  //this.router.navigate(['/login']);
    }
  }
}