import {Component, OnInit} from '@angular/core';
import {ProductsService} from "./shared/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'universal';
  public products: any = [];

  constructor(private _productsService: ProductsService) {
  }

  public ngOnInit(): void {
    this._productsService.getProducts().subscribe( res => this.products = res);
  }
}
