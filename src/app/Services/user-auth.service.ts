import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
private isUserLoggedSubject:BehaviorSubject<boolean>;

  constructor() {
    this.isUserLoggedSubject=new BehaviorSubject<boolean>(this.userLoggedState);
   }

  //  property 
   get userLoggedState():boolean {
    return (localStorage.getItem('token'))?true:false;
   }
  
  login(email:string, password:string){
    let userToken='123456';
    localStorage.setItem("token",userToken);
    this.isUserLoggedSubject.next(true);
  }
  logout(){
    localStorage.removeItem('token');
    this.isUserLoggedSubject.next(false);
  }

  getLoggedStatus():Observable<boolean> {
    return this.isUserLoggedSubject.asObservable();
  }

}
