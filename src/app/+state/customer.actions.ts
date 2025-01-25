import { createActionGroup, emptyProps, props } from '@ngrx/store';


export const CustomerActions = createActionGroup({
  source: 'Customer Page',
  events: {
    'Toggle Busy': emptyProps(),
    'Select Customer': props<{ customerId: string }>(),
  },
});
