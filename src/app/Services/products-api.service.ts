import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
// Day6
export class ProductsApiService {

  private httpOptions={};
  constructor(private httpClient:HttpClient) { 
    this.httpOptions={
      headers:new HttpHeaders({ 
        'content-type': 'application/json'
      })
    };
  }
  // Return all products
  getAllProducts():Observable<Iproduct[]>{
    // return this.httpClient.get<Iproduct[]>('http://localhost:3000/products')
    return this.httpClient.get<Iproduct[]>(`${environment.APIBaseURL}/products`);
  }

  // getProductsByCatid
  getProductsByCatID(catId:number):Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.APIBaseURL}/products?catID=${catId}`);
  }


  // get one product by id
  getProductByID(prdID:number):Observable<Iproduct>{
    return this.httpClient.get<Iproduct>(`${environment.APIBaseURL}/products/${prdID}`);
  }

  // post method
  addProduct(newProduct:Iproduct):Observable<Iproduct>{
    return this.httpClient.post<Iproduct>(`${environment.APIBaseURL}/products`,JSON.stringify(newProduct),this.httpOptions).pipe(retry(3),catchError((err)=>{
      return throwError(()=>{
        // return new Error(err.message);
        return new Error('Error with send to server');
      })
    }));
  }



}
