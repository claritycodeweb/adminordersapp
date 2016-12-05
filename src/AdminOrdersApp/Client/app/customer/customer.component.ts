import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer/customer';
import { CustomerService } from '../customer/customer.service';

import { Paginated } from '../core/common/paginated';

@Component({
    selector: 'my-dashboard',
    templateUrl: './customer.component.html'
})

export class CustomerComponent extends Paginated implements OnInit {

    customers: Customer[] = [];

    constructor(private customerService: CustomerService) {
        super(0, 0, 0);
    }

    getCustomers(): void {
        let self = this;
        self.customerService.get(self._page)
            .subscribe((res) => {

                let data: any = res.json();

                self.customers = data.items as Customer[];
                self._page = data.page;
                self._pagesCount = data.totalPages;
                self._totalCount = data.totalCount;
            },
            (error) => console.error('Error: ' + error));
    }

    search(i: number): void {
        super.search(i);
        this.getCustomers();
    }

    ngOnInit(): void {
        this.getCustomers();
    }
}
