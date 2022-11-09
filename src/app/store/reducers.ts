import { createReducer, on } from "@ngrx/store";
import * as fromActions from './actions'
export const  initialState: any = {
    isLoading: false
};

export const reducers = createReducer(initialState, 
    on(fromActions.example, (state: any) => ({...state, isLoading: true}))
    )