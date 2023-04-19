import { Component } from "@angular/core";

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
    firstName = 'John';
    lastName = 'Smith';
    age = 30;
    address = {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA'
    }

    // Methods

    // constructor runs when component is initialized
    // constructor is usually used to inject dependencies
    constructor() { 
       
    }

    sayHello() {
        console.log(`Hello ${this.firstName}`);
    }

    hasBirthday() {
        this.age += 1;
    }

    showAge() {
        return this.age + 2;
    }
}