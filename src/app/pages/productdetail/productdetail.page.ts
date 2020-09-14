import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductdetailPage implements OnInit {
  public sections: any = {
    first: 'first',
    second: 'second',
    selectedSection: ''
  };
  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  buttonClickHandler() {
    this.sections.selectedSection = this.sections.second;
  }
  
  async filter() { 
    const confirm = await this.alertCtrl.create({ 
    header: 'Confirmation', 
    message: 'Do you want to exit this game', 
    buttons: ['Disagree', 'Agree']
    // buttons: [
    // { 
    // text: 'Ok',
    // role: 'Ok', 
    // handler: () => {  
    // console.log('Confirm Ok'); 
    // } 
    // }, 
    // { 
    // text: 'Cancel', 
    // role: 'Cancel',
    // handler: () => { 
    // console.log('Confirm Cancel.');  
    // } 
    // } 
    // ] 
    }); 
    await confirm.present(); 
    } 
    slidePrev(slides){
      console.log(slides)
      slides.slideTo(2)
  }
   }  
