import { Action, createReducer, on } from '@ngrx/store';

import * as PaymentTemplateActions from '../actions/<%=dasherize(name)%>.actions';
import { <%=classify(name)%> } from '@system/modules/payments/models';
import { Cursor } from 'app/modules/shared/models';

export interface State {
  error: any;
  loading: boolean;
  selected: <%=classify(name)%>;
  list: <%=classify(name)%>[];
  cursor: Cursor;
}

export const initialState: State = {
  error: null,
  loading: false,
  selected: null,
  list: [],
  cursor: null,
};

export const paymentTemplatesReducer = createReducer(
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
    (state, { paymentTemplate }) => {
      return {
        ...state,
        selected: paymentTemplate,
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
  return paymentTemplatesReducer(state, action);
}
