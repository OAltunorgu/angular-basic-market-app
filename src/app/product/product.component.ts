import { ProductService } from './../services/product.service';
import { AlertifyService } from './../services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}
  title = 'Ürün Listesi';
  filterText = '';
  products: Product[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.productService.getProduct(params["categoryId"]).subscribe((data) => {
        this.products = data;
      });
    });
  }

  addToCart(product: any) {
    this.alertifyService.success(
      'Sepete Eklendi! ' + product.name + ' ' + product.id
    );
  }
}