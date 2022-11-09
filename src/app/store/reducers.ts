import { createReducer, on } from "@ngrx/store";
import * as fromActions from './actions';
import { AppStateInterface } from "./app-state-interface";

export const  initialState: AppStateInterface = {
    isLoading: false,
    example: null,
};

export const globalState = createReducer(initialState, 
    on(fromActions.example, (state: any) => ({...state, isLoading: true})),
    on(fromActions.setExample, (state: any, { example }) => ({...state, example}))
    )