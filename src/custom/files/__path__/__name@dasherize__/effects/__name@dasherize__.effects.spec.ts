import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { BranchesListEffects } from './<%=dasherize(name)%>.effects';
import { BranchesRepository } from 'app/data/repository/branches/branches.repository';
import { branchesRepositoryFactory } from 'app/data/repository/branches/branches.repository.factory';
import { branchesListActions } from '../actions/<%=dasherize(name)%>.actions';

describe('BranchesListEffects', () => {
  let effects: BranchesListEffects;
  let instanceEffects: (currentAction: any) => BranchesListEffects;
  let repository: BranchesRepository;
  let failureObservable;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BranchesListEffects,
        provideMockActions(() => null),
        { provide: BranchesRepository, useFactory: branchesRepositoryFactory },
      ],
    });
    effects = TestBed.inject(BranchesListEffects);
    repository = TestBed.inject(BranchesRepository);
    instanceEffects = (currentAction): BranchesListEffects =>
      new BranchesListEffects(currentAction, repository);
    failureObservable = of(null).pipe(
      map(() => {
        throw Error('fail');
      }),
    );
  });

  test('getBranches$ effect response type should be equal to getBranchesSuccess type', done => {
    const currentAction = new Actions(of(branchesListActions.getBranches({ payload: {} })));
    const effect = instanceEffects(currentAction);
    const { getBranches$ } = effect;

    getBranches$.subscribe(({ type }) => {
      expect(type).toEqual(branchesListActions.getBranchesSuccess.type);
      done();
    });
  });

  test('getBranches$ effect response type should be equal to getBranchesFailure type', done => {
    repository.getBranches = () => failureObservable;
    const currentAction = new Actions(of(branchesListActions.getBranches({ payload: {} })));
    const effect = instanceEffects(currentAction);
    const { getBranches$ } = effect;

    getBranches$.subscribe(({ type }) => {
      expect(type).toEqual(branchesListActions.getBranchesFailure.type);
      done();
    });
  });
});