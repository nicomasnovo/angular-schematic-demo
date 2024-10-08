import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { map, Observable, of } from 'rxjs';

import { <%=classify(name)%>Effects } from './<%=dasherize(name)%>.effects';
import { Actions } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { <%=camelize(name)%>Actions } from '../actions/<%=dasherize(name)%>.actions';

describe('<%=classify(name)%>Effects', () => {
  let repository: FeatureRepository;
  let failureObservable: Observable<any>;
  let instanceEffects: (currentAction: any) => <%=classify(name)%>Effects;
  let actions$: Actions;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        <%=classify(name)%>Effects,
        provideMockActions(() => actions$),
        { provide: FeatureRepository, useFactory: FeatureFactory },
      ],
    });
    repository = TestBed.inject(FeatureRepository);
    instanceEffects = (currentAction): <%=classify(name)%>Effects =>
      new <%=classify(name)%>Effects(currentAction, repository);
    failureObservable = of(null).pipe(
      map(() => {
        throw Error('fail');
      }),
    );
  });

  test('<%=camelize(name)%>$ effect response type should be equal to <%=camelize(name)%>Success type', done => {
    const currentAction = new Actions(
      of(<%=camelize(name)%>Actions.<%=camelize(name)%>({ payload: mockPayload })),
    );
    const effect = instanceEffects(currentAction);
    const { <%=camelize(name)%>$ } = effect;

    <%=camelize(name)%>$.subscribe(({ type }) => {
      expect(type).toEqual(<%=camelize(name)%>Actions.<%=camelize(name)%>Success.type);
      done();
    });
  });

  test('<%=camelize(name)%>$ effect response type should be equal to <%=camelize(name)%>Failure type', done => {
    repository.<%=camelize(name)%> = () => failureObservable;
    const currentAction = new Actions(
      of(<%=camelize(name)%>Actions.<%=camelize(name)%>({ payload: mockPayload })),
    );
    const effect = instanceEffects(currentAction);
    const { <%=camelize(name)%>$ } = effect;

    <%=camelize(name)%>$.subscribe(({ type }) => {
      expect(type).toEqual(<%=camelize(name)%>Actions.<%=camelize(name)%>Failure.type);
      done();
    });
  });
});
