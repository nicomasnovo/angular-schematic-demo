import { createAction } from '@ngrx/store';
// import { mockPaymentTemplateState } from 'app/modules/system/modules/payments/models/payment-template/payment-template.mocks';
import * as <%=classify(name)%>Feature from './<%=dasherize(name)%>.feature';

describe('PaymentTemplateFeature', () => {
  test('reducers', () => {
    const testAction = createAction('[TEST]')();
    const reducersResult = <%=classify(name)%>Feature.reducers(mock<%=classify(name)%>State, testAction);
    // expect(reducersResult).toMatchObject(mockPaymentTemplateState);
  });
});
