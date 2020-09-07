import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  
  searchTerm : any="";
  jsonData : any;
  data: any;
  constructor( private router:Router) {

    this.jsonData=[
      {"name":"WhiskyPedia"},
      {"name":"My Flight"},
      {"name":"Meet The Pros"},
      {"name":"My Cabinet"},
      {"name":"Wish List"},
      
      

      ];

   


}

setFilteredItems(searchTerm){
 
  return this.jsonData.filter((item) => {
       return item.name.toLowerCase().includes(searchTerm.toLowerCase());
   });  

}
 
myFlight(){
  this.router.navigateByUrl('/my-flight');
}
  ngOnInit() {

  }
  
  choosePopup() {
    console.log("coming");

   
   
  }
 
  edit(){

  }  
  select(){

  }
}
