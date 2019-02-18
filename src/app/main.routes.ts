import {
  Routes,
  RouterModule
} from '@angular/router';
import { AppComponent } from './app.component';

export const mainRoutes: Routes = [{
  path: '',
  redirectTo: '/jarvis',
  pathMatch: 'full'
},
{
  path: 'jarvis',
  component: AppComponent
},
{
  path: '**',
  redirectTo: '/jarvis',
  pathMatch: 'full'
},
];
export const mainRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(mainRoutes);
