import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import {ServiceService} from './shared/service.service';
import { RentalDetailComponent } from './rental/rental-detail/rental-detail.component'
import {RentalRoutingModule} from '../rental/rental-routing.module'
import {HttpClientModule} from '@angular/common/http'
import {NgPipesModule} from 'ngx-pipes';
import { UppercasePipe} from '../common/pipes/uppercase.pipe'
import {MapModule} from '../common/map/map.module'
@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent,
    UppercasePipe 
  ],
  imports: [
    CommonModule,
    RentalRoutingModule,
    RouterModule,
    HttpClientModule,
    NgPipesModule,
    MapModule

  ],
  providers :[ServiceService]
})
export class RentalModule {}
