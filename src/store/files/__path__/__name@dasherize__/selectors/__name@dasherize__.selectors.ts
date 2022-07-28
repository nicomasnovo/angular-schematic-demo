import { createSelector } from '@ngrx/store';
import { <%=camelize(name)%>FeatureSelector } from '../<%=dasherize(name)%>.feature';

export const <%=camelize(name)%>StateSelector = createSelector(
  <%=camelize(name)%>FeatureSelector%>,
  state => state['<%=dasherize(name)%>'];

export const <%=camelize(name)%>Selectors = {
  get<%=classify(name)%>Loading: createSelector(
    <%=camelize(name)%>StateSelector,
    state => state.loading,
  ),
  get<%=classify(name)%>Error: createSelector(
    <%=camelize(name)%>StateSelector,
    state => state.error,
  ),
};
