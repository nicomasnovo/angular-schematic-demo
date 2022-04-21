import * as <%=classify(name)%>Feature from '../<%=dasherize(name)%>.feature';
import {<%=camelize(name)%>Selectors } from './<%=dasherize(name)%>.selectors';

describe('<%=classify(name)%>Selectors', () => {
  const state:  <%=classify(name)%>Feature.State = {
    '<%=dasherize(name)%>': mock<%=classify(name)%>State,
  };

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
});
