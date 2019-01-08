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
      ]
    };
  }

  ngOnInit() {
  }

}
