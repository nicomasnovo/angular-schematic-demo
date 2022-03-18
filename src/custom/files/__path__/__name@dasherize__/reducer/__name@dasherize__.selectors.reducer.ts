import { Action, createReducer, on } from '@ngrx/store';

import { Cursor } from 'app/modules/shared/models';
import { Branch } from 'app/modules/system/modules/merchant/models';
import { branchesListActions } from '../actions/branches-list.actions';

export interface State {
  error: any;
  loading: boolean;
  branches: Branch[];
  cursor: Cursor;
}

export const initialState: State = {
  error: null,
  loading: false,
  branches: [],
  cursor: null,
};

export const branchesListReducer = createReducer(
  initialState,
  on(branchesListActions.getBranches, state => ({
    ...state,
    loading: true,
  })),
  on(branchesListActions.getBranchesFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  on(branchesListActions.getBranchesSuccess, (state, action) => ({
    ...state,
    loading: false,
    branches: action.branches,
    cursor: action.cursor,
    error: null,
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return branchesListReducer(state, action);
}