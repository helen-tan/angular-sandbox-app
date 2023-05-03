import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User";

// Create component Decorator with @Component
// Marks the class a an Angular class
// Provides metadata about the component
@Component({
    selector: 'app-user', // 'selector' determines the tag name. Prefixed with 'app-' as this is the format used for selectors for components generated with the Angular CLI.
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    // template: '<h2>John Doe</h2>'
    // styles: [`
    //     h2 {
    //         color: blue
    //     }
    // `]
})

export class UserComponent implements OnInit {
    // Properties
    user!: User; // points to the user interface

    // Methods

    // constructor runs when component is initialized
    // constructor is usually used to inject dependencies
    constructor() {
        
    }

    // Best practice is to use
    // constructor for dependency injection (custom servers, http, router, etc)
    // ngOnInit for initializations  (setting properties, calling service functions, etc)
    ngOnInit(): void {
        this.user = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com'
        }
    }

}

