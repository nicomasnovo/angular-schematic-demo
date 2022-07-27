import * as <%=classify(name)%>Feature from '../<%=dasherize(name)%>.feature';
import {<%=camelize(name)%>Selectors } from './<%=dasherize(name)%>.selectors';
import { mock<%=classify(name)%>State } from '../<%=dasherize(name)%>.mocks';

describe('<%=classify(name)%>Selectors', () => {
  const state:  <%=classify(name)%>Feature.State = {
    '<%=dasherize(name)%>': mock<%=classify(name)%>State,
  };

  test('get error', () => {
    expect(<%=camelize(name)%>Selectors.get<%=classify(name)%>Error(state)).toBe(
      state['<%=dasherize(name)%>'].<%=camelize(name)%>.error,
    );
  });

  test('get loading', () => {
    expect(<%=camelize(name)%>Selectors.get<%=classify(name)%>Loading(state)).toBe(
      state['<%=dasherize(name)%>'].<%=camelize(name)%>.loading,
    );
  });
});
