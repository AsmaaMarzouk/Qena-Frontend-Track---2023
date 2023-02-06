import { Component } from '@angular/core';
import { DataClass } from 'src/app/Models/data-class';
import { StoreInfo } from '../../Models/store-info'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // helloVar:string="Frontend Track";

  // sayHello(){
  //   return "Hello , "+this.helloVar;
  // }

  userFeedback:string="Very Good";



// member properties && member methods
// interface
store:StoreInfo = {name:"Frontend Track",coverImg:"https://images.unsplash.com/photo-1600703136783-bdb5ea365239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pcXVlJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",branches:["Item1","Item2","Item3","Item4","Item5"]};



// class
// property from class
dataClass:DataClass=new DataClass('ITI Data','https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg',['Qena','Sohag','Smart','Alex']);




// Event binding
// 
showImg:boolean=true;
toggleImg(){
this.showImg=!this.showImg;
}



}




