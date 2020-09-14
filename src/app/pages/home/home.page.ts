import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{ProductService} from'../../services/products.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchTerm:any;
  category:any;
  productDetail;
  productId;
  items:any;
  constructor(private products:ProductService,private route: ActivatedRoute) {
    // this.pushCart = CartPage; 
    
    
    this.items = [
      {
        ProductId:1,
        name: "Product",
        ImgUrl: "assets/imgs/1-1.jfif",
        flavour:"flavour",
        description:"Harry 12 year old highland single mait scotch"
        
      }, 
      {
        ProductId:2,
        name: "Product",
        ImgUrl: "assets/imgs/1-1.jfif",
        flavour:"flavour",
        description:"Harry 12 year old highland single mait scotch"
        
        
      }, 
      {
        ProductId:3,
        name: "Product",
        ImgUrl: "assets/imgs/1-1.jfif",
        flavour:"flavour",
        description:"Harry 12 year old highland single mait scotch"
        
        
      }, 
      {
        ProductId:4,
        name: "Product",
        ImgUrl: "assets/imgs/1-1.jfif",
        flavour:"flavour",
        description:"Harry 12 year old highland single mait scotch"
        
        
      }, 
      {
        ProductId:5,
        name: "Product",
        ImgUrl: "assets/imgs/1-1.jfif",
        flavour:"flavour",
        description:"Harry 12 year old highland single mait scotch"
        
        
      },
      {
        ProductId:6,
        name: "Product",
        ImgUrl: "assets/imgs/1-1.jfif",
        flavour:"flavour",
        description:"Harry 12 year old highland single mait scotch"
        
        
      },  
      ];
     
  }
 
 

  ngOnInit() {
    //this.items = this.products.getAllProducts();

  }
  goBack() {
    //this.navCtrl.pop();
  }
  changeCategory(){
    //this.getPosts(this.category,this.limit);
  }
 
  setFilteredItems(searchTerm) {
    //zthis.items = this.dataService.filterItems(searchTerm);
  }
  viewReicpe() {
    // this.navCtrl.push('RecipePage');
  }
}
