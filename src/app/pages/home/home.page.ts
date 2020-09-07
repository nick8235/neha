import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchTerm:any;
  category:any;

  constructor() {}




  ngOnInit() {
    // this.setFilteredItems("");

    // this.searchControl.valueChanges
    //   .pipe(debounceTime(700))
    //   .subscribe(search => {
    //     this.setFilteredItems(search);
    //   });
  }
  goBack() {
    //this.navCtrl.pop();
  }
  changeCategory(){
    //this.getPosts(this.category,this.limit);
  }
 
  setFilteredItems(searchTerm) {
    //this.items = this.dataService.filterItems(searchTerm);
  }
  viewReicpe() {
    // this.navCtrl.push('RecipePage');
  }
}
