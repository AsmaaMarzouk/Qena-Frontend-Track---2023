import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './Components/Admin/add-new-product/add-new-product.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderParentComponent } from './Components/order-parent/order-parent.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';

// array of objects => pathes
// first match wins
// basics
// First case 
// const routes: Routes = [
//   {path:'',redirectTo:'/Home',pathMatch:'full'},// Default path
//   {path:'Home',component: HomeComponent},
//   {path:'Products',component: ProductsComponent},
//   {path:'Order',component: OrderParentComponent},
//   {path:'**',component: NotFoundComponent},//wildcard path 
// ];

// second case
const routes: Routes = [
  // {path:'main',component:MainLayoutComponent,children:[
  //   {path:'',redirectTo:'/Home',pathMatch:'full'},// Default path
  //   {path:'Home',component: HomeComponent},
  //   {path:'Products',component: ProductsComponent},
  //   {path:'Order',component: OrderParentComponent},
  // ]},
  // {path:'**',component: NotFoundComponent},//wildcard path 

  {path:'',component:MainLayoutComponent,children:[
    {path:'',redirectTo:'/Home',pathMatch:'full'},// Default path
    {path:'Home',component: HomeComponent},
    {path:'Products',component: ProductsComponent},
    {path:'Products/:pid',component: ProductDetailsComponent},
    {path:'Order',component: OrderParentComponent},
    {path:'NewProduct',component: AddNewProductComponent}
  ]},
  {path:'**',component: NotFoundComponent},//wildcard path 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
