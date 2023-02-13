import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  prdList:Iproduct[];

  constructor() { 
    this.prdList=[
      {id:1,name:"IPhone",price:23000,quantity:2,catID:1,imgURL:"https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {id:6,name:"Readmi",price:14500,quantity:0,catID:1,imgURL:"https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:11,name:"Dell",price:36000,quantity:7,catID:2,imgURL:"https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:33,name:"HP",price:41000,quantity:0,catID:2,imgURL:"https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:77,name:"Tornado",price:22600,quantity:1,catID:3,imgURL:"https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:3,name:"LG",price:27250,quantity:5,catID:3,imgURL:"https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}];
  }


  // function return all products
  getAllProducts():Iproduct[]{
    return this.prdList;

  }

  // function return products by catID
  getProductsByCatID(categoryID:number):Iproduct[]{
    if(categoryID == 0){
      return this.getAllProducts();
    }
    else{
      return this.prdList.filter(prd=>prd.catID==categoryID);
    }
  }


  // get one product by id 
  // {}
  getProductByID(prdID:number):Iproduct|undefined{
    return this.prdList.find(prd=>prd.id==prdID);

  }

  // Day5
   getPrdIDList():number[]{
    return this.prdList.map(prd=>prd.id);

   }

   searchProductByName(prdName:string):Iproduct|undefined{
    return this.prdList.find(prd => prd.name==prdName);
   }
}
