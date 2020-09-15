import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.page.html',
  styleUrls: ['./productpage.page.scss'],
})
export class ProductpagePage implements OnInit {
  items:any;
   page=0;
   data:any;
   serviceKeyword:any;
  constructor(private service:AuthServiceService) {

  
    this.items = [
      { image:'assets/imgs/person.png', 
    title:" Harry 12 year old highland single mait scotch", 
    
  },
  { image:'assets/imgs/person.png', 
  title:" Harry 12 year old highland single mait scotch", 
},
{ image:'assets/imgs/person.png', 
title:" Harry 12 year old highland single mait scotch", 
},
{ image:'assets/imgs/person.png', 
title:" Harry 12 year old highland single mait scotch", 
},
{ image:'assets/imgs/person.png', 
title:" Harry 12 year old highland single mait scotch", 
},
{ image:'assets/imgs/person.png', 
title:" Harry 12 year old highland single mait scotch", 
},
]
} 
  
  ngOnInit() {
  }
  loadUser(data){
    this.service.getUser(data).subscribe((res) => {
      console.log(res);
     
        console.log(res);
        // this.users=this.users.concat(res['result']);
        
        }
      )};  
      filter(){
        
      }
      getProdForSearch($event){

      }
}
