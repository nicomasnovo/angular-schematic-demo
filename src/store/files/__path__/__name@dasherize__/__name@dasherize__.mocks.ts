import { <%=classify(name)%>State } from './<%=dasherize(name)%>.feature';

export const mock<%=classify(name)%>State: <%=classify(name)%>State = {
  <%=camelize(name)%>: {
    error: null,
    loading: false,
  },
};
