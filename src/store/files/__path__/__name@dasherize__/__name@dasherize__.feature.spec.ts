import { createAction } from '@ngrx/store';
import * as <%=classify(name)%>Feature from './<%=dasherize(name)%>.feature';

describe('PaymentTemplateFeature', () => {
  test('reducers', () => {
    const testAction = createAction('[TEST]')();
    const reducersResult = <%=classify(name)%>Feature.reducers(mock<%=classify(name)%>State, testAction);
    // expect(reducersResult).toMatchObject(mock);
  });
});
