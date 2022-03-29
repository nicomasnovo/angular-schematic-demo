import { TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jest-marbles';
import { map, of, ReplaySubject } from 'rxjs';

import * as PaymentTemplateActions from '../actions/<%=dasherize(name)%>.actions';

import {
  mockPaymentTemplate,
  mockPaymentTemplatePayload,
} from '@payments/models/<%=dasherize(name)%>/<%=dasherize(name)%>.mocks';

import { <%=classify(name)%>Repository } from '@data/repository/<%=dasherize(name)%>/<%=dasherize(name)%>.repository';
import { <%=classify(name)%>Effects } from './<%=dasherize(name)%>.effects';
import { mockApiError } from 'app/shared/mocks/api-error.mocks';
import { Actions } from '@ngrx/effects';
import { <%=camelize(name)%>RepositoryFactory } from 'app/data/repository/<%=dasherize(name)%>/<%=dasherize(name)%>.repository.factory';
import { mockPaginationRequestParameters } from 'app/modules/shared/models/mocks';

describe('<%=classify(name)%>Effects', () => {
  let effects: <%=classify(name)%>Effects;
  let actions;
  let router: Router;
  let snackbar: MatSnackBar;
  let <%=camelize(name)%>Service: <%=classify(name)%>Repository;
  let failureObservable;
  let instanceEffects: (currentAction: any) => <%=classify(name)%>Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        <%=classify(name)%>Effects,
        provideMockActions(() => actions),
        {
          provide: <%=classify(name)%>Repository,
          useFactory: <%=camelize(name)%>RepositoryFactory,
        },
        {
          provide: MatSnackBar,
          useValue: {
            open: jest.fn(() => ({
              onAction: jest.fn(() => of()),
              afterDismissed: jest.fn(() => of({ dismissedByAction: true } as MatSnackBarDismiss)),
            })),
          },
        },
        { provide: Router, useValue: { navigate: jest.fn() } },
      ],
    });
    router = TestBed.inject(Router);
    effects = TestBed.inject(<%=classify(name)%>Effects);
    snackbar = TestBed.inject(MatSnackBar);
    <%=camelize(name)%>Service = TestBed.inject(<%=classify(name)%>Repository);
    instanceEffects = (currentAction): <%=classify(name)%>Effects =>
      new <%=classify(name)%>Effects(currentAction, <%=camelize(name)%>Service, snackbar, router);
    failureObservable = of(null).pipe(
      map(() => {
        throw Error('fail');
      }),
    );
  });

  it('should create<%=classify(name)%> action activate create<%=classify(name)%>$ and create<%=classify(name)%> effects', () => {
    const action = <%=classify(name)%>Actions.create<%=classify(name)%>({
      templatePayload: mockPaymentTemplatePayload,
    });
    const completition = <%=classify(name)%>Actions.create<%=classify(name)%>Success({
      <%=camelize(name)%>: mockPaymentTemplate,
    });

    actions = hot('--a-', { a: action });
    const expected = cold('--b', { b: completition });

    expect(effects.create<%=classify(name)%>$).toBeObservable(expected);
  });

  it('should create<%=classify(name)%> action activate create<%=classify(name)%>Error$ effect', done => {
    <%=camelize(name)%>Service.create<%=classify(name)%> = () => failureObservable;
    const currentAction = new Actions(of(<%=classify(name)%>Actions.create<%=classify(name)%>));
    const effect = instanceEffects(currentAction);
    const { create<%=classify(name)%>$ } = effect;

    create<%=classify(name)%>$.subscribe(({ type }) => {
      expect(type).toEqual(<%=classify(name)%>Actions.create<%=classify(name)%>Error.type);
      done();
    });
  });

  it('should open snackbar on create<%=classify(name)%>Error', done => {
    const currentAction = new Actions(of(<%=classify(name)%>Actions.create<%=classify(name)%>Error));
    const effect = instanceEffects(currentAction);
    const { create<%=classify(name)%>Error$ } = effect;

    create<%=classify(name)%>Error$.subscribe(() => {
      expect(snackbar.open).toHaveBeenCalledWith('Ocurrió un error');
      done();
    });
  });

  it('should create<%=classify(name)%> action activate create<%=classify(name)%>Success$ effect', done => {
    const action = <%=classify(name)%>Actions.create<%=classify(name)%>Success({
      <%=camelize(name)%>: mock<%=classify(name)%>,
    });
    actions = new ReplaySubject(1);
    actions.next(action);

    effects.create<%=classify(name)%>Success$.subscribe(() => {
      expect(snackbar.open).toHaveBeenCalledWith('Plantilla Creada', 'VER', {
        duration: 5000,
      });
      expect(router.navigate).toHaveBeenCalledWith(['/<%=dasherize(name)%>/', mock<%=classify(name)%>.id]);
      done();
    });
  });

  it('should get<%=classify(name)%>ById action activate get<%=classify(name)%>ById$ and get<%=classify(name)%>ByIdSuccess effect', () => {
    const action = <%=classify(name)%>Actions.get<%=classify(name)%>ById({
      id: 'id_test',
    });
    const completition = <%=classify(name)%>Actions.get<%=classify(name)%>ByIdSuccess({
      <%=camelize(name)%>: mock<%=classify(name)%>,
    });

    actions = hot('--a-', { a: action });
    const expected = cold('--b', { b: completition });

    expect(effects.getPaymentTemplateById$).toBeObservable(expected);
  });

  it('should get<%=classify(name)%>ById action activate get<%=classify(name)%>ById$ and get<%=classify(name)%>ByIdError effect', done => {
    const payload = { id: 'id_test_error' };
    <%=camelize(name)%>Service.get<%=classify(name)%> = () => failureObservable;
    const currentAction = new Actions(of(PaymentTemplateActions.get<%=classify(name)%>ById(payload)));
    const effect = instanceEffects(currentAction);
    const { getPaymentTemplateById$ } = effect;

    getPaymentTemplateById$.subscribe(({ type }) => {
      expect(type).toEqual(<%=classify(name)%>Actions.get<%=classify(name)%>ByIdError.type);
      done();
    });
  });

  it('should get<%=classify(name)%>ByIdError action activate get<%=classify(name)%>ByIdError$ effect', done => {
    const action = <%=classify(name)%>Actions.get<%=classify(name)%>ByIdError({ error: mockApiError });
    actions = new ReplaySubject(1);
    actions.next(action);

    effects.get<%=classify(name)%>ByIdError$.subscribe(() => {
      expect(snackbar.open).toHaveBeenCalledWith('Ocurrió un error');
      done();
    });
  });

  it('should getPaymentTemplates action activate getPaymentTemplates$ and getPaymentTemplatesSuccess effect', done => {
    const currentAction = new Actions(
      of(
        <%=classify(name)%>Actions.get<%=classify(name)%>List({
          parameters: mockPaginationRequestParameters,
        }),
      ),
    );
    const effect = instanceEffects(currentAction);
    const { get<%=classify(name)%>List$ } = effect;

    get<%=classify(name)%>List$.subscribe(({ type }) => {
      expect(type).toEqual(<%=classify(name)%>Actions.get<%=classify(name)%>ListSuccess.type);
      done();
    });
  });

  it('should getPaymentTemplates action activate getPaymentTemplates$ and getPaymentTemplatesFailure effects', done => {
    <%=camelize(name)%>Service.get<%=classify(name)%>eList = () => failureObservable;
    const currentAction = new Actions(
      of(
        <%=classify(name)%>Actions.get<%=classify(name)%>List({
          parameters: mockPaginationRequestParameters,
        }),
      ),
    );
    const effect = instanceEffects(currentAction);
    const { get<%=classify(name)%>List$ } = effect;

    get<%=classify(name)%>List$.subscribe(({ type }) => {
      expect(type).toEqual(<%=classify(name)%>Actions.get<%=classify(name)%>ListFailure.type);
      done();
    });
  });
});
