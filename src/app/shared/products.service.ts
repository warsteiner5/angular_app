import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl = '/api/products';
  private environment = environment;

  constructor(private _http: HttpClient) { }

  public getProducts(): Observable<any>{
    return this._http.get(this.environment.baseUrl + this.productsUrl);
  }

  public getProductsById(id: string): Observable<any>{
    return this._http.get(`${this.environment.baseUrl}${this.productsUrl}/${id}`);
  }

  public saveProduct(product: any): Observable<any>{
    return this._http.post(this.environment.baseUrl + this.productsUrl, product);
  }

  public deleteProduct(id: string): Observable<any>{
    return this._http.delete(`${this.environment.baseUrl}${this.productsUrl}/${id}`);
  }


}
