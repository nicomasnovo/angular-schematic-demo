import { Action, createReducer, on } from '@ngrx/store';
import { <%=camelize(name)%>Actions } from '../actions/<%=dasherize(name)%>.actions';

/**  Autogenerated <%=classify(name)%> reducer */
export interface <%=camelize(name)%>State {
  error: any;
  loading: boolean;
}

export const <%=camelize(name)%>InitialState: <%=camelize(name)%>State = {
  error: null,
  loading: false,
};

const reducer = createReducer(
  <%=camelize(name)%>InitialState,
  on(<%=camelize(name)%>Actions. <%=camelize(name)%>, state => ({
    ...state,
    loading: true,
  })),
  on(<%=camelize(name)%>Actions. <%=camelize(name)%>Failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  on(<%=camelize(name)%>Actions. <%=camelize(name)%>Success, (state, action) => {
    return {
      ...state,
      loading: false,
    };
  }),
);

export function <%=camelize(name)%>Reducer(state: <%=camelize(name)%>State | undefined, action: Action) {
  return reducer(state, action);
}


