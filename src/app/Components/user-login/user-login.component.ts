import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  isUserLogged:boolean = false;
constructor(private userauthService:UserAuthService){}
ngOnInit(){
  this.isUserLogged=this.userauthService.userLoggedState;
}

  userLogin(){
    this.userauthService.login('test@gmail.com','password');
    this.isUserLogged=this.userauthService.userLoggedState;
  }
  userLogout(){
    this.userauthService.logout();
    this.isUserLogged=this.userauthService.userLoggedState;
  }
}
