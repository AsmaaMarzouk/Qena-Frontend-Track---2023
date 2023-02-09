import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.scss']
})
export class OrderParentComponent implements AfterViewInit {
catList:Icategory[];
selectedCatID:number=0;
receivedOrderTotalPrice:number=0;
// @viewChild
// document.getElement
// union
// @ViewChild('userName') user:ElementRef|null=null;
// @ViewChild('userName') user:ElementRef|undefined=undefined;
// @ViewChild('userName') user:ElementRef= {} as ElementRef;

// ? => safe navigation operator
// @ViewChild('userName') user?:ElementRef;

// ! => non null assertion operator
// @ViewChild('userName') user!:ElementRef;

@ViewChild(ProductsComponent) productRef!:ProductsComponent;


constructor(){
  this.catList=[{id:1,name:"Mobile"},{id:2,name:"LabTop"},{id:3,name:"TV"}]
}
  ngAfterViewInit(): void {
    // if(this.user)
    // this.user.nativeElement.value="Hello user value from ts";
    // console.log(this.productRef.prdList);
    
  }

onTotalPrice(totalPrice:number){
this.receivedOrderTotalPrice=totalPrice;
}


getArray(){
  console.log(this.productRef.prdListOfCat);
}
}
