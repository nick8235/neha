import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.page.html',
  styleUrls: ['./highlight.page.scss'],
})
export class HighlightPage implements OnInit {
  public url1: any;
  profilePicture:"assets/imgs/person.png"
  title:"Harry 12 year old highland single mait scotch"
  constructor(private sanitizer:DomSanitizer) {
  }

  ngOnInit() {
  }
  ionViewWillEnter(){
    
        //this.url1=this.sanitizer.bypassSecurityTrustResourceUrl();
    }
    dismiss(){

    }
    tip(){

    }
}
