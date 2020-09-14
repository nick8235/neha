import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whiskypic',
  templateUrl: './whiskypic.page.html',
  styleUrls: ['./whiskypic.page.scss'],
})
export class WhiskypicPage implements OnInit {
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
