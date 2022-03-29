import { createFeatureSelector, createSelector } from '@ngrx/store';
import { <%=classify(name)%>State } from '../<%=dasherize(name)%>.feature';

export const paymentTemplateFeatureSelector =
  createFeatureSelector<<%=classify(name)%>State>('<%=dasherize(name)%>');

export const <%=camelize(name)%>Selectors = {
  get<%=classify(name)%>SelectedId: createSelector(
    paymentTemplateFeatureSelector,
    state => state.paymentTemplate.selected,
  ),
  get<%=classify(name)%>List: createSelector(
    paymentTemplateFeatureSelector,
    state => state.paymentTemplate.list,
  ),
  get<%=classify(name)%>ListLoading: createSelector(
    paymentTemplateFeatureSelector,
    state => state.paymentTemplate.loading,
  ),
  get<%=classify(name)%>ListCursor: createSelector(
    paymentTemplateFeatureSelector,
    state => state.paymentTemplate.cursor,
  ),
  get<%=classify(name)%>ListError: createSelector(
    paymentTemplateFeatureSelector,
    state => state.paymentTemplate.error,
  ),
};