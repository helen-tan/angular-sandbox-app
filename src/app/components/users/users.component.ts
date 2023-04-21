import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})

export class UsersComponent implements OnInit {
  users: User[] = [];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showUserForm: boolean = false;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA'
        },
        isActive: true,
        registered: new Date('01/02/2023 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        address: {
          street: '20 School st',
          city: 'Lynn',
          state: 'MA'
        },
        isActive: false,
        registered: new Date('3/11/2023 06:20:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        address: {
            street: '55 Mill st',
            city: 'Miami',
            state: 'FL'
        },
        isActive: true,
        registered: new Date('11/02/2023 10:30:00'),
        hide: true
      }
    ];

    // Changed the loaded property to true
    this.loaded = true

  }

  addUser(user: User) {
    this.users.push(user);
  }

  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  // }

  onSubmit(e: any) {
    e.preventDefault();
    console.log(123);
  }

  fireEvent(e: any) {
    console.log(e.type);
    console.log(e.target.value);
  }
}
