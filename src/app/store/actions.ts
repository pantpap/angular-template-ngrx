import { createAction, props } from '@ngrx/store'

export const example = createAction('[Example] Example');

export const setExample = createAction('[Global] Set Example', props<{example: string}>())