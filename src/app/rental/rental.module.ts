import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import {ServiceService} from './shared/service.service';
import { RentalDetailComponent } from './rental/rental-detail/rental-detail.component'
import {RentalRoutingModule} from '../rental/rental-routing.module'

@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent
  ],
  imports: [
    CommonModule,
    RentalRoutingModule,
    RouterModule 
  ],
  providers :[ServiceService]
})
export class RentalModule {}
