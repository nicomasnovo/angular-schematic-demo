import { PaginationRequestParameters } from 'app/modules/shared/models';
import { mockBranchCollection } from 'app/modules/system/modules/merchant/models/mocks';
import { branchesListActions } from './branches-list.actions';
describe('Branches List Actions', () => {
  it('should create a getBranches action', () => {
    const payload: PaginationRequestParameters = {};
    const action = branchesListActions.getBranches({ payload });
    expect(action).toEqual({
      type: '[Branches List] Get branches',
      payload,
    });
  });

  it('should create a getBranchesSuccess action', () => {
    const action = branchesListActions.getBranchesSuccess(mockBranchCollection);
    expect(action).toEqual({
      type: '[Branches List] Get branches SUCCESS',
      ...mockBranchCollection,
    });
  });

  it('should create a getBranchesFailure action', () => {
    const action = branchesListActions.getBranchesFailure({ error: null });
    expect(action).toEqual({
      type: '[Branches List] Get branches FAILURE',
      error: null,
    });
  });
});