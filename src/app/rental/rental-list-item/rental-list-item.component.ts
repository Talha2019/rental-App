import { Component, OnInit, Input } from '@angular/core';
import {ServiceService} from '../shared/service.service'
@Component({
  selector: 'app-rental-list-item',
  templateUrl: './rental-list-item.component.html',
  styleUrls: ['./rental-list-item.component.css']
})
export class RentalListItemComponent implements OnInit {

  @Input() rental : any;
  constructor() { }

  ngOnInit() {
  }

}
