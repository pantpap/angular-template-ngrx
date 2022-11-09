import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromActions from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-template';

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(fromActions.example())
  }
}
