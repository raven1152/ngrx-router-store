import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCustomerById, selectCustomers, selectRouteParams } from '../+state/customer.selectors';

@Component({
  selector: 'ogs-customer',
  standalone: false,
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {
  private store = inject(Store);
  public customers$ = this.store.select(selectCustomers);
  public routeParams$ = this.store.select(selectRouteParams);
  public selectedCustomer$ = this.store.select(selectCustomerById);
}
