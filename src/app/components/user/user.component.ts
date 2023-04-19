import { Component } from "@angular/core";
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

export class UserComponent {
    // Properties
    user: User; // points to the user interface

    // Methods

    // constructor runs when component is initialized
    // constructor is usually used to inject dependencies
    constructor() {
        this.user = {
            firstName: 'John',
            lastName: 'Doe',
            age: 30,
            address: {
                street: '50 Main st',
                city: 'Boston',
                state: 'MA'
            }
        }
    }

}

