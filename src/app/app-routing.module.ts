import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalComponent } from './rental/rental.component';
import {RentalRoutingModule} from './rental/rental-routing.module'

import { RentalListComponent } from './rental/rental-list/rental-list.component';
// import { RentalListItemComponent } from './rental/rental-list-item/rental-list-item.component';
// import { RentalDetailComponent } from './rental/rental/rental-detail/rental-detail.component'

const routes: Routes = [
  {path:'', redirectTo: '/rentals', pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
