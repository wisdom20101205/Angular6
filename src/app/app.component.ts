import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular6Project';
  user: User;
  textInput: String = 'initial value';

  constructor() {
    this.user = new User();
    this.user.name = 'Foo Bar';
    this.user.address = '1000 street, City, State, 10010';
    this.user.designation = 'Software Developer';
    this.user.phone = [
      '11111',
      '22222',
      '33333',
      'wewewe'
    ];
  }
}
