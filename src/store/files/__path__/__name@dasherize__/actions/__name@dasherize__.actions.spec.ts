import {
  mock<%=classify(name)%>,
  mock<%=classify(name)%>Payload,
  mock<%=classify(name)%>List,
} from '@system/modules/payments/models/<%=dasherize(name)%>/<%=dasherize(name)%>.mocks';
import { mockPaginationRequestParameters } from 'app/modules/shared/models/mocks';
import {
  get<%=classify(name)%>List,
  get<%=classify(name)%>ListSuccess,
  get<%=classify(name)%>ListFailure,
  get<%=classify(name)%>ByIdSuccess,
  get<%=classify(name)%>ByIdError,
  get<%=classify(name)%>ById,
  create<%=classify(name)%>Error,
  create<%=classify(name)%>Success,
  create<%=classify(name)%>,
} from './<%=dasherize(name)%>.actions';

describe('<%=classify(name)%> Actions', () => {
  it('should create a getPayment action', () => {
    const action = get<%=classify(name)%>List({ parameters: mockPaginationRequestParameters });
    expect(action).toEqual({
      type: '[<%=classify(name)%> List] Get <%=classify(name)%>List',
      parameters: mockPaginationRequestParameters,
    });
  });
  it('should create a create<%=classify(name)%> action', () => {
    const <%=camelize(name)%>List = mock<%=classify(name)%>List;
    const action = get<%=classify(name)%>ListSuccess({
      <%=camelize(name)%>Collection: <%=camelize(name)%>List,
    });
    expect(action).toEqual({
      <%=camelize(name)%>Collection: <%=camelize(name)%>List,
      type: '[<%=classify(name)%> List] Get <%=classify(name)%>List SUCCESS',
    });
  });

  it('should create a get<%=classify(name)%>ListFailure action', () => {
    const action = get<%=classify(name)%>ListFailure({ error: null });
    expect(action).toEqual({
      error: null,
      type: '[<%=classify(name)%> List] Get <%=classify(name)%>List ERROR',
    });
  });
  it('should create a create<%=classify(name)%> action', () => {
    const templatePayload = mock<%=classify(name)%>Payload;
    const action = create<%=classify(name)%>({
      templatePayload,
    });
    expect(action).toEqual({
      templatePayload,
      type: '[Create<%=classify(name)%>] Create <%=classify(name)%>',
    });
  });
  it('should create a create<%=classify(name)%> action', () => {
    const <%=camelize(name)%> = mock<%=classify(name)%>;
    const action = create<%=classify(name)%>Success({
      <%=camelize(name)%>,
    });
    expect(action).toEqual({
      <%=camelize(name)%>,
      type: '[<%=classify(name)%>] Create <%=classify(name)%> SUCCESS',
    });
  });

  it('should create a create<%=classify(name)%>Error action', () => {
    const action = create<%=classify(name)%>Error({ error: null });
    expect(action).toEqual({
      error: null,
      type: '[<%=classify(name)%>] Create <%=classify(name)%> ERROR',
    });
  });

  it('should create a createPaymentTemplate action', () => {
    const paymentTemplate = mockPaymentTemplate;
    const action = getPaymentTemplateByIdSuccess({
      paymentTemplate,
    });
    expect(action).toEqual({
      paymentTemplate,
      type: '[PaymentTemplate] Get PaymentTemplate by ID SUCCESS',
    });
  });

  it('should create a getPaymentTemplateByIdError action', () => {
    const action = getPaymentTemplateByIdError({ error: null });
    expect(action).toEqual({
      error: null,
      type: '[PaymentTemplate] Get PaymentTemplate by ID ERROR',
    });
  });
  it('should create a createPaymentTemplate action', () => {
    const id = 'f144ac4e-911a-4314-b97b-2a01a3bac3a2';
    const action = getPaymentTemplateById({ id });
    expect(action).toEqual({
      id,
      type: '[PaymentTemplate] Get PaymentTemplate by ID',
    });
  });
});
