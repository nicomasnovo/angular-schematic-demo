import { createFeatureSelector, createSelector } from '@ngrx/store';
import { <%=classify(name)%>State } from '../<%=dasherize(name)%>.feature';

export const <%=camelize(name)%>FeatureSelector =
  createFeatureSelector<<%=classify(name)%>State>('<%=dasherize(name)%>');

export const <%=camelize(name)%>Selectors = {
  get<%=classify(name)%>SelectedId: createSelector(
    <%=camelize(name)%>FeatureSelector,
    state => state.<%=camelize(name)%>.selected,
  ),
  get<%=classify(name)%>List: createSelector(
    <%=camelize(name)%>FeatureSelector,
    state => state.<%=camelize(name)%>.list,
  ),
  get<%=classify(name)%>ListLoading: createSelector(
    <%=camelize(name)%>FeatureSelector,
    state => state.<%=camelize(name)%>.loading,
  ),
  get<%=classify(name)%>ListCursor: createSelector(
    <%=camelize(name)%>FeatureSelector,
    state => state.<%=camelize(name)%>.cursor,
  ),
  get<%=classify(name)%>ListError: createSelector(
    <%=camelize(name)%>FeatureSelector,
    state => state.<%=camelize(name)%>.error,
  ),
};