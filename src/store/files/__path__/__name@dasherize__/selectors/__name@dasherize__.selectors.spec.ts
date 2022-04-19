import { mock<%=classify(name)%>State } from 'app/modules/system/modules/payments/models/payment-template/<%=dasherize(name)%>.mocks';
import * as <%=classify(name)%>Feature from '../<%=dasherize(name)%>.feature';
import {<%=camelize(name)%>Selectors } from './<%=dasherize(name)%>.selectors';

describe('BranchesListSelectors', () => {
  const state:  <%=classify(name)%>Feature.State = {
    'payment-template': mock<%=classify(name)%>State,
  };

  test('getCursor', () => {
    expect(<%=camelize(name)%>Selectors.get<%=classify(name)%>ListCursor(state)).toBe(
      state['<%=dasherize(name)%>'].<%=camelize(name)%>.cursor,
    );
  });

  test('getError', () => {
    expect(<%=camelize(name)%>Selectors.get<%=classify(name)%>ListError(state)).toBe(
      state['<%=dasherize(name)%>'].<%=camelize(name)%>.error,
    );
  });

  test('getLoading', () => {
    expect(<%=camelize(name)%>Selectors.get<%=classify(name)%>ListLoading(state)).toBe(
      state['<%=dasherize(name)%>'].<%=camelize(name)%>.loading,
    );
  });

  test('get<%=classify(name)%>List', () => {
    expect(<%=camelize(name)%>Selectors.get<%=classify(name)%>List(state)).toBe(
      state['<%=dasherize(name)%>'].<%=camelize(name)%>.list,
    );
  });

  test('get<%=classify(name)%>SelectedId', () => {
    expect(<%=camelize(name)%>Selectors.get<%=classify(name)%>SelectedId(state)).toBe(
      state['<%=dasherize(name)%>'].<%=camelize(name)%>.selected,
    );
  });
});
