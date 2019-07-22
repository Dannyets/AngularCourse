import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `,
  styleUrls: []
})
export class AppComponent {
  title = 'ng-fundamentals';
}
