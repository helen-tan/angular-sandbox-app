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
    firstName: string;
    lastName: string;
    age: number;
    address;

    foo: any;
    hasKids: boolean;
    numberArray: number[];
    stringArray: string[];
    mixedArray: any[];
    myTuple: [string, number, boolean];
    unusable: void;
    u: undefined;
    n: null;

    // Methods

    // constructor runs when component is initialized
    // constructor is usually used to inject dependencies
    constructor() { 
       this.firstName = 'John';
       this.lastName = 'Doe';
       this.age = 30;
       this.address = {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA'
       }
       this.foo = true;
       this.hasKids = true;
       this.numberArray = [1, 2, 3];
       this.stringArray = ['hello', 'world']; 
       this.mixedArray = [1, true, undefined, 'hey'];
       this.myTuple = ['hello', 1, true];
       this.unusable = undefined;
       this.u = undefined;
       this.n = null;

       console.log(this.addNumbers(2, 3));
    }

    showAge() {
        return this.age + 2;
    }

    addNumbers(num1: number, num2: number): number {
        return num1 + num2;
    }
}