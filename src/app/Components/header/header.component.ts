import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userLogged:boolean;
constructor(private authService: UserAuthService){
this.userLogged=this.authService.userLoggedState;
// console.log(this.userLogged);

}
  ngOnInit(): void {
// this.userLogged=this.authService.userLoggedState;
this.authService.getLoggedStatus().subscribe(result=>{
  this.userLogged=result;
  // console.log(this.userLogged);

})
   
  }

}
