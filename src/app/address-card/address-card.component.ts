import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;

  constructor() {
    this.user = {
      name: 'Foo Bar',
      title: 'Software Developer',
      address: '1234 Main St, City, State, 10010',
      phone: [
        '123-123-1234',
        '456-456-4567',
        '789-789-7890'
      ]
    };
  }

  ngOnInit() {
  }

}
