import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
userId:'number';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  city: string = '';
  dob: string = '';
  country: string = '';
  usertype:string='';
  constructor(private router: Router, public service: AuthServiceService) { }

  ngOnInit() {
  }
  
  addRegister() {
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
      else {
        this.service.presentToast("Error occured while signup.");
      }
    });
  }
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
