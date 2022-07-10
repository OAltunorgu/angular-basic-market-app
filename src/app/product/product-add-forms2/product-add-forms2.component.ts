import { Router } from '@angular/router';
import { AlertifyService } from './../../services/alertify.service';
import { ProductService } from './../../services/product.service';
import { Category } from './../../category/category';
import { CategoryService } from './../../services/category.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers: [CategoryService, ProductService],
})
export class ProductAddForms2Component implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}

  productAddForm: FormGroup;
  product: Product = new Product();
  model: Product = new Product();
  categories: Category[];

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.createProductAddForm();
    this.categoryService.getCategory().subscribe((data) => {
      this.categories = data;
    });
  }

  add() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value);
    }

    this.productService.addProduct(this.product).subscribe((data) => {
      this.alertifyService.success(data.name + ' başarıyla eklendi.');
    });
    this.router.navigate(['/products']);
  }
}
