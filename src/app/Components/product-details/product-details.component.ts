import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  productsIDList:number[]=[];
  currentProductID:number = 0;
  currentIndex:number = 0;
  constructor(private prdService:ProductService,private activatedRoute: ActivatedRoute,private location:Location,private router:Router) {}
  ngOnInit(): void {
    // activatedRoute built in service => snapshot => get parameters of url (paramMap) => use get method => get('parameterName')
  //  let ProductId=this.activatedRoute.snapshot.paramMap.get('pid');
  //  console.log(ProductId);


  

//   let productID:number=(this.activatedRoute.snapshot.paramMap.get('pid'))?Number(this.activatedRoute.snapshot.paramMap.get('pid')):0;

//  let foundProduct= this.prdService.getProductByID(productID);
// //  console.log(foundProduct);
//  if(foundProduct){
//   this.prd=foundProduct;
  
//   // console.log(this.prd)
// }
// else{
//   alert("Product not found");
//   this.location.back();
// }

// Day5
// this.currentProductID=(this.activatedRoute.snapshot.paramMap.get('pid'))?Number(this.activatedRoute.snapshot.paramMap.get('pid')):0;

// let foundProduct= this.prdService.getProductByID(this.currentProductID);
// //  console.log(foundProduct);
// if(foundProduct){
//  this.prd=foundProduct;
 
//  // console.log(this.prd)
// }
// else{
//  alert("Product not found");
//  this.location.back();
// }


// After modify snapshot
// subscribe
this.activatedRoute.paramMap.subscribe(paramMap =>{
  this.currentProductID =(paramMap.get('pid')) ?Number(paramMap.get('pid')) :0;
  let foundProduct= this.prdService.getProductByID(this.currentProductID);
  if(foundProduct){
    this.prd=foundProduct;
 
 // console.log(this.prd)
  }
  else{
   alert("Product not found");
   this.location.back();
 }
});


this.productsIDList=this.prdService.getPrdIDList();
// console.log(this.productsIDList);
// findIndex
  }

  goPrevFunc(){
    this.currentIndex = this.productsIDList.findIndex((item)=> item == this.currentProductID);//2
    this.router.navigate(['Products',this.productsIDList[--this.currentIndex]]) //this.productsIDList[1]

  }
  goNextFunc(){
    this.currentIndex = this.productsIDList.findIndex((item)=> item == this.currentProductID);
    this.router.navigate(['Products',this.productsIDList[++this.currentIndex]])//this.productsIDList[2]

  }

  searchProduct(productName:string){
   let foundPrd= this.prdService.searchProductByName(productName);
   if(foundPrd){
    this.prd=foundPrd;
   
  }
  else{
    alert("Product not found")
  }
  }
}
