import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ServiceService} from '../../shared/service.service'
import {Rental} from '../../shared/rental.model'
@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {

  rental: Rental;

  
  constructor( private route: ActivatedRoute,
    private service: ServiceService) { }

  ngOnInit() {

    this.route.params.subscribe((params) => {

      this.getRentals(params['rentalId'])
    })
  }

  getRentals(rentalId: string){
    this.service.getRentalById(rentalId).subscribe((rental: Rental) => {
      this.rental = rental;
      console.log(rental)
    }) 
  }
}
