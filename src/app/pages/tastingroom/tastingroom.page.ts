import { Component, OnInit,ViewChild } from '@angular/core';

import { TastingroompopupPage } from '../tastingroompopup/tastingroompopup.page';
import { ModalController, AlertController } from '@ionic/angular';
import { IonSelect } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tastingroom',
  templateUrl: './tastingroom.page.html',
  styleUrls: ['./tastingroom.page.scss'],
})
export class TastingroomPage implements OnInit {
  hideList = true;
 
  @ViewChild('countryList') countrySelectRef: IonSelect;
  countryData : any[];
  country : any;
countrySelected: any;
  constructor(private alertCtrl:AlertController,private router:Router) { }

  ngOnInit() {
  }
  
  addToFlight() {
    this.countrySelectRef.open();
 }
    // async addToFlight(country) {
    //   this.router.navigateByUrl('/Tastingroompopup');
    //   // const alert = await this.alertCtrl.create({
    //   //   this.router.navigateByUrl('/dashboard');      // componentProps: { country: country }
    //   // });
    //   // return await alert.present();
    //  }
}
