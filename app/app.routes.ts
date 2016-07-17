import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeComponent } from './home.component';

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }/*,
  {
    path: 'personal',
    component: PersonalComponent
  },
  {
    path: 'workshop',
    component: WorkshopComponent
  },
  {
    path: 'lecture',
    component: LectureComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  }*/,
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
