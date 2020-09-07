import { Injectable, NgZone, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController, LoadingController, ModalController, Platform } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  headers = new HttpHeaders();

  loading: any;
  constructor(private http: HttpClient, private loadingCtrl: LoadingController, 
    private toastCtrl: ToastController, public modalController: ModalController, 
    public platform: Platform) {
    this.platform.ready().then(() => {
      
      
     
    });
  }
  signUp(data) {
    this.headers.append('Access-Control-Allow-Origin', '*');
    const value = this.http.post(' http://122.176.53.53/whiskyService/User/PostUserRegistration',data,{headers: this.headers});
    console.log(data);
    
    return value;
}
getData(data) {
  this.headers.append('Access-Control-Allow-Origin', '*');
  const value = this.http.post(' https://randomuser.me/api/?results=20&page=${this.page}',data,{headers: this.headers});
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

