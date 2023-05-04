import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Properties
  users: User[];
  data!: Observable<any>;

  constructor() { 
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('01/02/2023 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@gmail.com',
        isActive: false,
        registered: new Date('3/11/2023 06:20:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'karen@gmail.com',
        isActive: true,
        registered: new Date('11/02/2023 10:30:00'),
        hide: true
      }
    ];
  }

  // Observable example
  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000)

      setTimeout(() => {
        observer.next(2);
      }, 2000)

      setTimeout(() => {
        observer.next(3);
      }, 3000)

      setTimeout(() => {
        observer.next(4);
      }, 4000)
    
    });

    return this.data;
  }  

  getUsers(): Observable<User[]> {
    console.log("Fetching users from service...");
    return of(this.users); // Returns an Observable that we can subscribe to
  }

  addUsers(user: User) {
    this.users.unshift(user);
  }
}
