import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[] = [];
  showExtended: boolean = true;
  loaded: boolean = false;

  constructor() {
    // Simulating a request to fetch users
    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
          }
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          address: {
            street: '20 School st',
            city: 'Lynn',
            state: 'MA'
          }
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          address: {
              street: '55 Mill st',
              city: 'Miami',
              state: 'FL'
          }
        }
      ];
      // Changed the loaded property to true
      this.loaded = true
    }, 2000);
  }

  ngOnInit() {
    this.showExtended = false;

    this.addUser({
      firstName: 'David',
      lastName: 'Jackson',
      age: 44,
      address: {
          street: '12 Wake st',
          city: 'Miami',
          state: 'FL'
      }
    })
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
