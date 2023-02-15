import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
// declare => formGroup
userFormGroup: FormGroup;
// service formBuilder
constructor(private formBuilder: FormBuilder){
  // control
  // this.userFormGroup=new FormGroup({
  //   // fullName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[A-Za-z]{3,5}')]),
  //   fullName:new FormControl('',[Validators.required,Validators.minLength(3)]),
  //   email:new FormControl(''),
  //   password:new FormControl(''),
  //   mobileNo:new FormControl(''),
  //   address: new FormGroup({
  //     city:new FormControl(''),
  //     street:new FormControl('')

  //   })

  // });
this.userFormGroup=this.formBuilder.group({
  fullName:['',[Validators.required,Validators.minLength(3)]],
  email:[''],
  mobileNo:formBuilder.array([formBuilder.control('')]),
  address:this.formBuilder.group({
    city:[''],
    street:['']
  }),
  password:[''],
  rePassword:['']
})
}
// convert fullName to property
get fullName(){
  return this.userFormGroup.get('fullName');
}

get mobileNo(){
  return this.userFormGroup.get('mobileNo') as FormArray;
}
addMobile(){
  // add new control
  // push
  this.mobileNo.push(this.formBuilder.control(''));

}
}
