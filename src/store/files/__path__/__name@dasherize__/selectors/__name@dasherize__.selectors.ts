import { createFeatureSelector, createSelector } from '@ngrx/store';
import { <%=classify(name)%>State } from '../<%=dasherize(name)%>.feature';

export const <%=camelize(name)%>FeatureSelector =
  createFeatureSelector<<%=classify(name)%>State>('<%=dasherize(name)%>');

export const <%=camelize(name)%>Selectors = {
  get<%=classify(name)%>Loading: createSelector(
    <%=camelize(name)%>FeatureSelector,
    state => state.<%=camelize(name)%>.loading,
  ),
  get<%=classify(name)%>Error: createSelector(
    <%=camelize(name)%>FeatureSelector,
    state => state.<%=camelize(name)%>.error,
  ),
};