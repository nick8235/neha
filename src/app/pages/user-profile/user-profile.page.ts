import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  public sections: any = {
    first: 'first',
    second: 'second',
    selectedSection: ''
  };
  constructor() { }

  ngOnInit() {
  }
choosePopup(){

}
editProfile(){

}
buttonClickHandler() {
  this.sections.selectedSection = this.sections.second;
}
filter(){
  
}
}
