import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Guards/auth.guard';

const routes:Routes=[
  {path:'',redirectTo:'/User/UserProfile',pathMatch:'full'},
  {path:'UserProfile',component: UserProfileComponent,canActivate:[AuthGuard]},
  {path:'EditProfile',component: EditProfileComponent,canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    EditProfileComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
