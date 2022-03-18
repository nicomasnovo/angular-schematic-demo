import { createSelector } from '@ngrx/store';
import { settingsFeatureSelector } from '../../settings.feature';

const branchesListStateSelector = createSelector(
  settingsFeatureSelector,
  state => state['<%=name%>'],
);

export const branchesListSelectors = {
  getBranches: createSelector(<%=camelize(name)%>tStateSelector, state => state.branches),
  getCursor: createSelector(<%=camelize(name)%>StateSelector, state => state.cursor),
  getError: createSelector(<%=camelize(name)%>StateSelector, state => state.error),
  getLoading: createSelector(<%=camelize(name)%>StateSelector, state => state.loading),
};