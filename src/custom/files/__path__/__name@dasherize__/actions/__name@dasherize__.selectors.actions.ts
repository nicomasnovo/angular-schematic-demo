import { createAction, props } from '@ngrx/store';
import { PaginationRequestParameters } from 'app/modules/shared/models';
import { BranchCollection } from 'app/modules/system/modules/merchant/models';

export const branchesListActions = {
  getBranches: createAction(
    '[Branches List] Get branches',
    props<{ payload: PaginationRequestParameters }>(),
  ),
  getBranchesSuccess: createAction(
    '[Branches List] Get branches SUCCESS',
    props<BranchCollection>(),
  ),
  getBranchesFailure: createAction('[Branches List] Get branches FAILURE', props<{ error: any }>()),
};