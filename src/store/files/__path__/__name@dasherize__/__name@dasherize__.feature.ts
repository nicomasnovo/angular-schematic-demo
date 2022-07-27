import { Action, combineReducers } from '@ngrx/store';

import * as from<%=classify(name)%> from './reducer/<%=dasherize(name)%>.reducer';

export interface <%=classify(name)%>State {
  <%=camelize(name)%>: from<%=classify(name)%>.<%=classify(name)%>State;
}

export interface State {
  '<%=dasherize(name)%>': <%=classify(name)%>State;
}

export function reducers(state: <%=classify(name)%>State | undefined, action: Action) {
  return combineReducers({
    <%=camelize(name)%>: from<%=classify(name)%>.<%=camelize(name)%>Reducer,
  })(state, action);
}
