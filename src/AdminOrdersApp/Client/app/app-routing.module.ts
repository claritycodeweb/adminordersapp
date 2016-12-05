import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent }   from './customer/customer.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: CustomerComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
