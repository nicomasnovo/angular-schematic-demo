import * as <%=classify(name)%>Actions from '../actions/<%=dasherize(name)%>.actions';
import { reducer, State, initialState } from './<%=dasherize(name)%>.reducer';

import { mockApiError } from 'app/shared/mocks/api-error.mocks';

describe('PaymentTemplateReducer', () => {
  let state: State;

  beforeEach(() => {
    state = { error: null, loading: false, selected: null, list: [], cursor: null };
  });

  it('should return the initial state', () => {
    const action = { type: 'dummy_action' };
    expect(reducer(state, action)).toEqual(initialState);
  });

  it('should set loading in true on <%=classify(name)%>Actions.create<%=classify(name)%>', () => {
    const action = <%=classify(name)%>Actions.create<%=classify(name)%>({
      templatePayload: {
        title: '',
        amount: 0,
        isMessageEditable: false,
        isAmountEditable: false,
        message: '',
        terminalId: '502b3cbd-6321-4f0f-80dc-988d73ac4c4a',
      },
    });
    const expectedState = { error: null, loading: true, selected: null, list: [], cursor: null };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should add new instance on on CreatePaymentTemplateActions.createPaymentTemplateSuccess', () => {
    const <%=camelize(name)%>: <%=classify(name)%> = mock<%=classify(name)%>;
    const action = <%=classify(name)%>Actions.create<%=classify(name)%>Success({
      <%=camelize(name)%>,
    });
    const expectedState = {
      loading: false,
      list: [],
      error: null,
      selected: mock<%=classify(name)%>,
      cursor: null,
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should not modify state on Create<%=classify(name)%>Actions.create<%=classify(name)%>Error', () => {
    const action = <%=classify(name)%>Actions.create<%=classify(name)%>Error({ error: mockApiError });
    const expectedState = {
      error: mockApiError,
      loading: false,
      selected: null,
      list: [],
      cursor: null,
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should modify state on PaymentTemplates.getPaymentTemplatesSuccess', () => {
    const action = <%=classify(name)%>Actions.get<%=classify(name)%>ListSuccess({
      <%=camelize(name)%>Collection: mock<%=classify(name)%>List,
    });
    const expectedState = {
      error: null,
      selected: null,
      cursor: mock<%=classify(name)%>List.cursor,
      loading: false,
      list: mock<%=classify(name)%>eList.<%=camelize(name)%>List,
      list: mock<%=classify(name)%>eList.<%=camelize(name)%>List,
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should not modify state on <%=classify(name)%>.get<%=classify(name)%>Failure', () => {
    const action = <%=classify(name)%>Actions.get<%=classify(name)%>ListFailure({ error: mockApiError });
    const expectedState = {
      error: mockApiError,
      loading: false,
      selected: null,
      list: [],
      cursor: null,
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
