import { Component, OnInit, Output } from '@angular/core';
import {ServiceService} from '../shared/service.service'
import { Rental} from '../shared/rental.model'

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  rentals: Rental[] = []
  constructor(private service :ServiceService) { }

  ngOnInit() {

    const rentalObservable = this.service.getRental();

    rentalObservable.subscribe(
      (rentals:Rental[]  ) =>{
        this.rentals = rentals;

        

      },
      (err) => {

      },
      () => {

      }
    )
  }

}
