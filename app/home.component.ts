import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { MainService } from './main.service';

@Component({
  selector: 'b-home',
  template: `דף הבית`,
  styleUrls: ['app/home.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ MainService ]
})

export class HomeComponent implements OnInit {
	constructor( private router: Router, private mainService: MainService) { }
	ngOnInit() {
		this.mainService.getHome()
		//.then(heroes => this.heroes = heroes.slice(1, 5));
	}
}
