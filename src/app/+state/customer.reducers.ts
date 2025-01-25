import { createReducer, on } from '@ngrx/store';
import { CustomerActions } from './customer.actions';

export interface Customer {
  customerId: string;
  customerName: string;
}

export interface CustomerState {
  busy: boolean;
  selectedCustomerId: string;
  customers: Customer[];
}

// initial state is set up for demo purpose, normally this would be populated
//  by an effect that utilizes some async process to get records from an api
export const initialCustomerState: CustomerState = {
  busy: false,
  selectedCustomerId: '',
  customers: [
    { customerId: "abc", customerName: "ABC Equipment Rental" },
    { customerId: "arb", customerName: "Arby's" },
    { customerId: "tuu", customerName: "Tulsa University" },
    { customerId: "mul", customerName: "Mullen Plumbing" },
  ],
}

export const customerReducer = createReducer(
  initialCustomerState,
  on(
    CustomerActions.toggleBusy,
    (state) => ({ ...state, busy: !state.busy }),
  ),
  on(
    CustomerActions.selectCustomer,
    (state, { customerId }) => {
      let customer = state.customers.find((customer) => customer.customerId === customerId);
      if (customer) {
        return {
          ...state,
          selectedCustomerId: customerId
        };
      }
      return state;
    }
  ),
);
