// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { <%=classify(name)%>Service } from '../<%=dasherize(name)%>.service';

// @Component({
//   selector: 'dn-<%=dasherize(name)%>',
//   templateUrl: './<%=dasherize(name)%>.component.html',
//   styleUrls: ['./<%=dasherize(name)%>.component.scss'],
// })
// export class <%=classify(name)%>Component {
//   <%=camelize(name)%>Fetch$: Observable<any>;
//   constructor(private <%=camelize(name)%>Service: <%=classify(name)%>Service) {
//   }
//   private get<%=classify(name)%>() {
//     this.<%=camelize(name)%>Fetch$ = this.<%=camelize(name)%>Service.get<%=classify(name)%>();
//   }
// }

import { <%=camelize(name)%>Selectors } from './<%=dasherize(name)%>.selectors';
import * as BranchesListFeature from '../../settings.feature';
import { mockSettingsState } from 'app/shared/mocks/settings-store.mocks';

describe('<%=classify(name)%>Selectors', () => {
  const state: BranchesListFeature.State = { settings: mockSettingsState };

  test('get<%=classify(name)%>Cursor', () => {
    expect(branchesListSelectors.getCursor(state)).toBe(state.settings['<%=dasherize(name)%>'].cursor);
  });

  test('get<%=classify(name)%>Error', () => {
    expect(branchesListSelectors.getError(state)).toBe(state.settings['<%=dasherize(name)%>'].error);
  });

  test('get<%=classify(name)%>Loading', () => {
    expect(branchesListSelectors.getLoading(state)).toBe(state.settings['<%=dasherize(name)%>'].loading);
  });

  test('get<%=classify(name)%>Refunds', () => {
    expect(branchesListSelectors.getBranches(state)).toBe(state.settings['<%=dasherize(name)%>'].branches);
  });
});