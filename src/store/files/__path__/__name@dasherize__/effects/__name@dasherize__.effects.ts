import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';

import * as <%=classify(name)%>Actions from '../actions/<%=dasherize(name)%>.actions';
import { <%=classify(name)%> } from '@payments/models';
import { <%=classify(name)%>Repository } from 'app/data/repository/<%=dasherize(name)%>/<%=dasherize(name)%>.repository';

@Injectable()
export class <%=classify(name)%>Effects {
  constructor(
    private actions$: Actions,
    private <%=camelize(name)%>Service: <%=classify(name)%>Repository,
    private snackbar: MatSnackBar,
    private router: Router,
  ) {}

  create<%=classify(name)%>$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%=classify(name)%>Actions.create<%=classify(name)%>),
      concatMap(action =>
        this.<%=camelize(name)%>Service.create<%=classify(name)%>(action.templatePayload).pipe(
          map((response: <%=classify(name)%>) =>
          <%=classify(name)%>Actions.create<%=classify(name)%>Success({
            <%=camelize(name)%>: response,
            }),
          ),
          catchError(error => of(<%=classify(name)%>Actions.create<%=classify(name)%>Error(error))),
        ),
      ),
    ),
  );

  create<%=classify(name)%>Success$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(<%=classify(name)%>Actions.create<%=classify(name)%>Success),
        concatMap(({ <%=camelize(name)%> }) =>
          this.snackbar
            .open('Plantilla Creada', 'VER', { duration: 5000 })
            .afterDismissed()
            .pipe(
              tap((event: MatSnackBarDismiss) => {
                if (event.dismissedByAction) {
                  this.router.navigate(['/payment-template/', <%=camelize(name)%>.id]);
                }
              }),
            ),
        ),
      ),
    { dispatch: false },
  );

  create<%=classify(name)%>Error$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(<%=classify(name)%>Actions.create<%=classify(name)%>Error),
        tap(() => this.snackbar.open('Ocurrió un error')),
      ),
    { dispatch: false },
  );

  get<%=classify(name)%>ById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%=classify(name)%>Actions.get<%=classify(name)%>ById),
      concatMap(({ id }) =>
        this.<%=camelize(name)%>Service.get<%=classify(name)%>(id).pipe(
          map((response: <%=classify(name)%>) =>
            <%=classify(name)%>Actions.get<%=classify(name)%>ByIdSuccess({
              <%=camelize(name)%>: response,
            }),
          ),
          catchError(error => of(<%=classify(name)%>Actions.get<%=classify(name)%>ByIdError(error))),
        ),
      ),
    ),
  );

  get<%=classify(name)%>ByIdError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(<%=classify(name)%>Actions.get<%=classify(name)%>ByIdError),
        tap(() => {
          this.snackbar.open('Ocurrió un error');
        }),
      ),
    { dispatch: false },
  );

  get<%=classify(name)%>List$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%=classify(name)%>Actions.get<%=classify(name)%>List),
      concatMap(({ parameters }) =>
        this.<%=camelize(name)%>Service.get<%=classify(name)%>List(parameters).pipe(
          map(response =>
            <%=classify(name)%>Actions.get<%=classify(name)%>ListSuccess({
              <%=camelize(name)%>Collection: response,
            }),
          ),
          catchError(error => of(<%=classify(name)%>Actions.get<%=classify(name)%>ListFailure(error))),
        ),
      ),
    ),
  );
}
