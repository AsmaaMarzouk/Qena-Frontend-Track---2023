import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  prd:Iproduct | undefined = undefined;
  constructor(private prdService:ProductService,private activatedRoute: ActivatedRoute,private location:Location) {}
  ngOnInit(): void {
    // activatedRoute built in service => snapshot => get parameters of url (paramMap) => use get method => get('parameterName')
  //  let ProductId=this.activatedRoute.snapshot.paramMap.get('pid');
  //  console.log(ProductId);

  let productID:number=(this.activatedRoute.snapshot.paramMap.get('pid'))?Number(this.activatedRoute.snapshot.paramMap.get('pid')):0;

 let foundProduct= this.prdService.getProductByID(productID);
//  console.log(foundProduct);
 if(foundProduct){
  this.prd=foundProduct;
  
  // console.log(this.prd)
}
else{
  alert("Product not found");
  this.location.back();
}
  }



}
