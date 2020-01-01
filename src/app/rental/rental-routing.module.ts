import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalComponent } from './rental.component';

import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalDetailComponent } from './rental/rental-detail/rental-detail.component'

const routes: Routes = [
  {path:'rentals', component: RentalComponent,
  children: [
    {path: '', component:RentalListComponent},
    {path: ':rentalId', component:RentalDetailComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalRoutingModule { }