import { Action, createReducer, on } from '@ngrx/store';

import * as <%=classify(name)%>Actions from '../actions/<%=dasherize(name)%>.actions';

import { Cursor } from 'app/modules/shared/models';

export interface State {
  error: any;
  loading: boolean;
  selected: <%=classify(name)%>;
  feature: <%=classify(name)%>[];
  cursor: Cursor;
}

export const initialState: State = {
  error: null,
  loading: false,
  selected: null,
  list: [],
  cursor: null,
};

export const <%=camelize(name)%>sReducer = createReducer(
  initialState,
  on(
    <%=classify(name)%>Actions.create<%=classify(name)%>,
    <%=classify(name)%>Actions.get<%=classify(name)%>List,
    state => ({
      ...state,
      loading: true,
    }),
  ),
  on(
    <%=classify(name)%>Actions.create<%=classify(name)%>Success,
    <%=classify(name)%>Actions.get<%=classify(name)%>ByIdSuccess,
    (state, { <%=camelize(name)%> }) => {
      return {
        ...state,
        selected: <%=camelize(name)%>,
        loading: false,
      };
    },
  ),
  on(<%=classify(name)%>Actions.get<%=classify(name)%>ListSuccess, (state, action) => ({
    ...state,
    list: action.<%=camelize(name)%>Collection.<%=camelize(name)%>List,
    cursor: action.<%=camelize(name)%>Collection.cursor,
    loading: false,
  })),
  on(
    <%=classify(name)%>Actions.create<%=classify(name)%>Error,
    <%=classify(name)%>Actions.get<%=classify(name)%>ListFailure,
    (state, action) => ({
      ...state,
      error: action.error,
      loading: false,
    }),
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return <%=camelize(name)%>sReducer(state, action);
}
