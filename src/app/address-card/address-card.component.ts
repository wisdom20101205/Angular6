import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;
  // tslint:disable-next-line:no-input-rename
  @Input('name') userName: string;

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.user = {
      name: this.userName,
      title: 'Software Developer',
      address: '1234 Main St, City, State, 10010',
      phone: [
        '1111',
        '22222',
        '33333'
      ]
    };
  }

}
