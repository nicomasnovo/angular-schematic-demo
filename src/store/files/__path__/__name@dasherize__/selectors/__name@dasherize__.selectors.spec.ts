import {<%=camelize(name)%>Selectors } from './<%=dasherize(name)%>.selectors';
import { mock<%=classify(name)%>State } from '../<%=dasherize(name)%>.mocks';

describe('<%=classify(name)%>Selectors', () => {
  const state = { feature: mock<%=classify(name)%>State };

  test('get error', () => {
    expect(<%=camelize(name)%>Selectors.get<%=classify(name)%>Error(state)).toBe(
      state.feature['<%=dasherize(name)%>'].error,
    );
  });

  test('get loading', () => {
    expect(<%=camelize(name)%>Selectors.get<%=classify(name)%>Loading(state)).toBe(
      state.feature['<%=dasherize(name)%>'].loading,
    );
  });
});
