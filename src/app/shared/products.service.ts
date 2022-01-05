import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl = '/api/products';
  private enviroment = environment;

  constructor(private _http: HttpClient) { }

  public getProducts(): Observable<any>{
    return this._http.get(this.enviroment.baseUrl + this.productsUrl);
  }
}
