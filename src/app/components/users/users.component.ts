import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})

export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[] = [];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any; // ViewChild arg need to match form identifier in template

  // Constructor to inject Data Service
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.users = this.dataService.getUsers();

    // Changed the loaded property to true
    this.loaded = true

  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   // Add to users
  //   this.users.unshift(this.user);
  //   // Clear out form
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   }
  // }

  onSubmit({value, valid}: NgForm) {
    if (!valid) {
      console.log('Form is not valid')
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.dataService.addUsers(value);

      this.form.reset();
    }
  }

}
