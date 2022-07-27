import { createAction } from '@ngrx/store';
import * as <%=classify(name)%>Feature from './<%=dasherize(name)%>.feature';
import { mock<%=classify(name)%>State } from './<%=dasherize(name)%>.mocks';

describe('<%=classify(name)%>Feature', () => {
  test('reducers', () => {
    const testAction = createAction('[TEST]')();
    const reducersResult = <%=classify(name)%>Feature.reducers(mock<%=classify(name)%>State, testAction);
    expect(reducersResult).toMatchObject(mock<%=classify(name)%>State);
  });
});
