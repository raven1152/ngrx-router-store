import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CustomerState } from './customer.reducers';
import { getRouterSelectors } from '@ngrx/router-store';

export const customersState = createFeatureSelector<CustomerState>('customers');

export const selectCustomers = createSelector(
  customersState,
  (state) => {
    return state.customers;
  },
);

export const { selectRouteParams } = getRouterSelectors();

export const selectCustomerById = createSelector(
  selectCustomers,
  selectRouteParams,
  (customers, { id }) => {
    return customers.find(customer => customer.customerId === id)
  },
);
