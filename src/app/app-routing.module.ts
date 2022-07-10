import { LoginGuard } from './login/login.guard';
import { LoginComponent } from './login/login.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductComponent },
  {
    path: 'product-add-1',
    component: ProductAddForms1Component,
    canActivate: [LoginGuard],
  },
  {
    path: 'product-add-2',
    component: ProductAddForms2Component,
    canActivate: [LoginGuard],
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products/category/:categoryId', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
