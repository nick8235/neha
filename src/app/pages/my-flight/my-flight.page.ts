import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-flight',
  templateUrl: './my-flight.page.html',
  styleUrls: ['./my-flight.page.scss'],
})
export class MyFlightPage implements OnInit {
  items:any; 
  img:any
  constructor( private  router:Router) {
    this.items = [
    {"img":"assets/imgs/whisky.png,assets/imgs/whisky.png,assets/imgs/whisky.png","title":"Around"},
    {"title":"Around"},
    {"title":"Around"},
    {"title":"Around"},
  ];
   }

  ngOnInit() {
  }
  viewItem(){
    this.router.navigateByUrl('/home');
  }
}
