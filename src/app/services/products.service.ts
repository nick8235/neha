import { Injectable } from '@angular/core';
import { map, filter, find, switchMap, tap, catchError, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProductDetails(productId:number): Observable<any>{
    let url = './assets/product.json';
     return this.http.get<Product[]>('http://122.176.53.53/whiskyService/ProductMaster/GetProductId').pipe(
      map( arr => arr.find( r => r.id === productId))
      )
  }

  

  getAllProducts(): Observable<any>{
    let url = './assets/product.json';
    return this.http.get('http://122.176.53.53/whiskyService/ProductMaster/GetAllProduct');
  }
}
