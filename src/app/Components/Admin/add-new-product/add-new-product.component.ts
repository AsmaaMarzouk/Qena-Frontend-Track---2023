import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent {
  newPrd:Iproduct = {} as Iproduct;
  catList:Icategory[];
  constructor(private prdAPIService:ProductsApiService,private router:Router){
    this.catList=[{id:1,name:"Mobile"},{id:2,name:"LabTop"},{id:3,name:"TV"}]
  }
  addNewProduct(){

    // let newPrd:Iproduct={
    //   id:99,name:"Tornado",price:27250,quantity:5,catID:3,imgURL:"https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}

    //   this.prdAPIService.addProduct(newPrd).subscribe(data=>{
    //     console.log(data);

    //     this.router.navigate(['/Products'])
        
    //   })

    this.prdAPIService.addProduct(this.newPrd).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/Products']);
      
    })
    
  }
}
