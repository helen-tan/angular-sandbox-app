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
  currentClasses = {};
  currentStyles = {};

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
        image: "https://unsplash.it/640?image=91",
        isActive: true,
        balance: 100,
        registered: new Date('01/02/2023 08:30:00')
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
        image: "https://unsplash.it/640?image=65",
        isActive: false,
        balance: 200,
        registered: new Date('3/11/2023 06:20:00')
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
        image: "https://unsplash.it/600?image=64",
        isActive: true,
        balance: 50,
        registered: new Date('11/02/2023 10:30:00')
      }
    ];

    // Changed the loaded property to true
    this.loaded = true


    // this.addUser({
    //   firstName: 'David',
    //   lastName: 'Jackson',
    // })

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  // For class binding with ngClass
  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd, // The class 'btn-success' will be applied if the property enableAdd is true
      'big-text': this.showExtended
    }
  }

  // For style binding with ngStyle
  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }
}
