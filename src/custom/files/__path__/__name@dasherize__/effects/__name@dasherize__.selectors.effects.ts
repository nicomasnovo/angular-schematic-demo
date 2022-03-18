import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, debounceTime, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { BranchesRepository } from 'app/data/repository/branches/branches.repository';
import { branchesListActions } from '../actions/branches-list.actions';

@Injectable()
export class BranchesListEffects {
  constructor(private actions$: Actions, private branchesRepository: BranchesRepository) {}

  getBranches$ = createEffect(() =>
    this.actions$.pipe(
      ofType(branchesListActions.getBranches),
      debounceTime(500),
      concatMap(({ payload }) =>
        this.branchesRepository.getBranches(payload).pipe(
          map(collection => branchesListActions.getBranchesSuccess(collection)),
          catchError(error => of(branchesListActions.getBranchesFailure({ error }))),
        ),
      ),
    ),
  );
}