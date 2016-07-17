import { Component }       from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/home']" routerLinkActive="active">ראשי</a>
      <a [routerLink]="['/about']" routerLinkActive="active">אודות</a>
      <a [routerLink]="['/contact']" routerLinkActive="active">צרי קשר</a>
    </nav>
	<router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ ],
  precompile: [ HomeComponent ]
})
export class AppComponent {
  title = 'בשבילי';
}
