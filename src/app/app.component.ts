import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { selectCustomerById } from './+state/customer.selectors';

@Component({
  selector: 'ogs-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ngrx-store';
  private store = inject(Store);
  storeData$ = this.store.select((store) => store);
  selectedId = this.store.select(selectCustomerById)

  ngOnInit(): void {
    this.storeData$.pipe(
      tap(storeData => {
        console.log(storeData)
      }),
    )
  }
}
