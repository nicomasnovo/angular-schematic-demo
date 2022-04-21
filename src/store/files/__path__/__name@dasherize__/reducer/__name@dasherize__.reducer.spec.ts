import { <%=camelize(name)%>Actions } from '../actions/<%=dasherize(name)%>.actions';
import { <%=camelize(name)%>InitialState, <%=camelize(name)%>Reducer } from './<%=dasherize(name)%>.reducer';

describe('<%=classify(name)%>Reducer', () => {
  it('should return the initial state', () => {
    const action = { type: 'dummy_action' };
    expect(<%=camelize(name)%>Reducer(undefined, action)).toEqual(<%=camelize(name)%>InitialState);
  });

  it.each(['<%=camelize(name)%>'])('should set loading to true on %s', actionName => {
    const action = <%=camelize(name)%>Actions[actionName]();
    const expectedState = {
      ...<%=camelize(name)%>InitialState,
      loading: true,
    };
    expect(<%=camelize(name)%>Reducer(undefined, action)).toEqual(expectedState);
  });

  it.each(['<%=camelize(name)%>Failure'])(
    'should set error to not null and loading to false on %s',
    actionName => {
      const mockError = { message: 'mockMessage' };
      const action = <%=camelize(name)%>Actions[actionName]({ error: mockError });
      const expectedState = {
        ...<%=camelize(name)%>InitialState,
        error: mockError,
        loading: false,
      };
      expect(<%=camelize(name)%>Reducer(undefined, action)).toEqual(expectedState);
    },
  );

  it('should set on <%=camelize(name)%>Success', () => {
    const action = <%=camelize(name)%>Actions.<%=camelize(name)%>Success();
    const expectedState = {
      ...<%=camelize(name)%>InitialState,
      loading: false,
    };
    expect(<%=camelize(name)%>Reducer(undefined, action)).toEqual(expectedState);
  });
});
