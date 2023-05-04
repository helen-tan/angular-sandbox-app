import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
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
  data:any;


  // Constructor to inject Data Service
  constructor(private userService: UserService) {

  }

  ngOnInit() {
    // Subscribe to an Observable
    this.userService.getData().subscribe(data => {
      console.log(data);
    })

    // Get users
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true // Changed the loaded property to true
    });


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

      this.userService.addUsers(value);

      this.form.reset();
    }
  }

}
