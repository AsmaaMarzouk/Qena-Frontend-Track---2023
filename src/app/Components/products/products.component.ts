import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  // catID:1 => Mobile  , catID:2 => LabTop ,catID:3 => TV 
  // anaymous array of objects
// prdList:Iproduct={id:1,name:"IPhone",price:23000,quantity:2,catID:1,imgURL:"https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"};


prdList:Iproduct[];


constructor(){
  this.prdList=[
    {id:1,name:"IPhone",price:23000,quantity:2,catID:1,imgURL:"https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:6,name:"Readmi",price:14500,quantity:0,catID:1,imgURL:"https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {id:11,name:"Dell",price:36000,quantity:7,catID:2,imgURL:"https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {id:33,name:"HP",price:41000,quantity:0,catID:2,imgURL:"https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {id:77,name:"Tornado",price:22600,quantity:1,catID:3,imgURL:"https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {id:3,name:"LG",price:27250,quantity:5,catID:3,imgURL:"https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}];

}
}