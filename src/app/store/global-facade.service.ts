import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from './app-state-interface';
import * as fromActions from './actions'

@Injectable({
  providedIn: 'root'
})
export class GlobalFacadeService {

  constructor(private store: Store<AppStateInterface>) { }

  setExample(example: string) {
    this.store.dispatch(fromActions.setExample({example}));
  }
}
