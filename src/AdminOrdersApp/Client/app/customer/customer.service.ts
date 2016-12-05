import { Injectable } from '@angular/core';
import { Headers, Http, Response  } from '@angular/http';
import { Customer } from './customer';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomerService {
    // private heroesUrl = 'api/customer';  // URL to web api
    // private headers = new Headers({ 'Content-Type': 'application/json' });

    // constructor(private http: Http) { }

    // getHeroes(): Promise<Customer[]> {
    //     return this.http.get(this.heroesUrl)
    //         .toPromise()
    //         .then(response => response.json().data as Customer[])
    //         .catch(this.handleError);
    // }

    // getHero(id: number): Promise<Customer> {
    //     return this.getHeroes()
    //         .then((heroes) => heroes.find((hero) => hero.id === id));
    // }



    public _pageSize: number = 10;
    public _baseUri: string  = 'api/customer';

    constructor(public http: Http) {

    }

    get(page: number) {
        let uri = this._baseUri + '?page=' + page.toString() + '&pageSize' + this._pageSize.toString();

        return this.http.get(uri)
            .map((response) => (<Response>response));
    }
}
