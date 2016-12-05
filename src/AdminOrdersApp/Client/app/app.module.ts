import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component'

//import { CustomerDetailComponent } from './customer/customer-detail.component'
//import { CustomerSearchComponent } from './customer/customer-search.component'
import { CustomerService } from './customer/customer.service'


import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './theme/services/in-memory-data.service';

@NgModule({
    declarations: [
        AppComponent,
        CustomerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [CustomerService],
    bootstrap: [AppComponent]
})
export class AppModule { }
