import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  datas:any;
  constructor() { 
    this.datas=[
      {image:"assets/imgs/pic.png"},
      {image:"assets/imgs/pic.png"},
      {image:"assets/imgs/pic.png"},
       {image:"assets/imgs/pic.png"},
       {image:"assets/imgs/pic.png"},
       {image:"assets/imgs/pic.png"},
       {image:"assets/imgs/pic.png"},
        {image:"assets/imgs/pic.png"},
        {image:"assets/imgs/pic.png"},
        {image:"assets/imgs/pic.png"},
        {image:"assets/imgs/pic.png"},
         {image:"assets/imgs/pic.png"},
         

    ]
  }

  ngOnInit() {
  }

}
