import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController, LoadingController, ModalController, Platform } from '@ionic/angular';
// import{ Obseraable,Map} from'rxjs/operator';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  headers = new HttpHeaders();

  loading: any;
  constructor(private http: HttpClient, private toastCtrl: ToastController, public modalController: ModalController, 
    public platform: Platform) {
    this.platform.ready().then(() => {
      
      
     
    });
  }
  login(data){
    this.headers.append('Access-Control-Allow-Origin', '*');
    const value=this.http.post('http://122.176.53.53/whiskyService/User/login',data,{headers:this.headers});
    console.log(data);
    return value;


  }
  signUp(data) {
    this.headers.append('Access-Control-Allow-Origin', '*');
    const value = this.http.post(' http://122.176.53.53/whiskyService/User/PostUserRegistration',data,{headers: this.headers});
    console.log(data);
    
    return value;
}
getUser(data) {
  this.headers.append('Access-Control-Allow-Origin', '*');
  const value = this.http.get(' http://122.176.53.53/whiskyService/ProductMaster/GetAllProduct');
  console.log(data);
  
  return value;
}
async presentToast(msg) {
  const toast = await this.toastCtrl.create({
    message: msg,
    duration: 2000,
    cssClass: "toast",
    position: "middle"
  });
  toast.present();
}
}

