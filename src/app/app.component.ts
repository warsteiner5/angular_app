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
  public productName = '';
  public productBrand = '';

  constructor(private _productsService: ProductsService) {
  }

  private _getProducts(): void {
    this._productsService.getProducts().subscribe( res => this.products = res);
  }

  public ngOnInit(): void {
    // this._getProducts();
  }

  public deleteProduct(id: string): void {
    this._productsService.deleteProduct(id).subscribe( () => {
      this._getProducts();
    });
  }


  public saveProduct(): void {
    this._productsService.saveProduct({name: this.productName, brand: this.productBrand}).subscribe( () => {
      this.productName = '';
      this.productBrand = '';
      this._getProducts();
    });
  }
}
