
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent }      from './components/accounts/accounts.component';
import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
  { path: 'accounts', component: AccountsComponent },
  { path: 'home', component: HomeComponent }
];

export const Routing = RouterModule.forRoot(routes);