import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResturentDashComponent } from './resturent-dash/resturent-dash.component';

const routes: Routes = [
//   {
// // path:'',redirectTo:'login',pathMatch:'full'
//   },
//   {
//     path:'login',component:LoginComponent
//   },
//   {
//     path:'signup',component:SignupComponent

//   },
//   {
//     path:'resturent',component:ResturentDashComponent

//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
