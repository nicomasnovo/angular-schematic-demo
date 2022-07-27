import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
]
import { of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { <%=camelize(name)%>Actions } from '../actions/<%=dasherize(name)%>.actions';

@Injectable()
export class <%=classify(name)%>Effects {
  constructor(private actions$: Actions, private repository: FeatureRepository) {}

  <%=camelize(name)%>$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%=camelize(name)%>Actions.<%=camelize(name)%>),
      concatMap(action =>
        this.repository.<%=camelize(name)%>(action.payload).pipe(
          map(() => <%=camelize(name)%>Actions.<%=camelize(name)%>Success()),
          catchError(error => of(<%=camelize(name)%>Actions.<%=camelize(name)%>Failure(error))),
        ),
      ),
    ),
  );
}
