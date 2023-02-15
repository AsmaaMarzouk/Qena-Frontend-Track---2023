import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './Components/products/products.component';
import { OrderParentComponent } from './Components/order-parent/order-parent.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { BorderBoxDirective } from './Directives/border-box.directive';
import { UsdToEgpPipe } from './Pipes/usd-to-egp.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AddNewProductComponent } from './Components/Admin/add-new-product/add-new-product.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';

// class decorator
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    OrderParentComponent,
    NotFoundComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    BorderBoxDirective,
    UsdToEgpPipe,
    AddNewProductComponent,
    UserRegisterComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
