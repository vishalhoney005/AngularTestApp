import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './Auth/login/login.component';
import { routeAuthGuard } from './Auth/route-auth.guard';

const routes: Routes = [
  {path:'categories', component:ListCategoryComponent,canActivate:[routeAuthGuard]},
  {path:'categories/add', component:AddCategoryComponent,canActivate:[routeAuthGuard]},
  {path: 'products/edit/:id', component:UpdateProductComponent,canActivate:[routeAuthGuard]},
  {path: 'categories/edit/:id', component:UpdateCategoryComponent,canActivate:[routeAuthGuard]},
  {path:'products', component:ListProductComponent,canActivate:[routeAuthGuard]},
  {path:'products/add', component:AddProductComponent,canActivate:[routeAuthGuard]},
  {path:'register', component:RegisterComponent},
  {path: '', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
