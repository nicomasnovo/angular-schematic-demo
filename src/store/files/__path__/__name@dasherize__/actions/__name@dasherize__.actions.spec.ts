import { <%=camelize(name)%>Actions } from './<%=dasherize(name)%>.actions';

describe('<%=classify(name)%> Actions', () => {
  it('should create a <%=camelize(name)%> action', () => {
    const payload: <%=classify(name)%>Payload = mock<%=classify(name)%>Payload;
    const action = <%=camelize(name)%>Actions. <%=camelize(name)%>({ payload });
    expect(action).toEqual({
      type: '[<%=classify(name)%>] <%=decamelize(name)%>',
      payload,
    });
  });

  it('should create a <%=camelize(name)%>Success action', () => {
    const action = <%=camelize(name)%>Actions. <%=camelize(name)%>Success();
    expect(action).toEqual({
      type: '[<%=classify(name)%>] <%=decamelize(name)%> SUCCESS',
    });
  });

  it('should create a <%=camelize(name)%>Failure action', () => {
    const action = <%=camelize(name)%>Actions. <%=camelize(name)%>Failure({ error: null });
    expect(action).toEqual({
      type: '[<%=classify(name)%>] <%=decamelize(name)%> FAILURE',
      error: null,
    });
  });
});

