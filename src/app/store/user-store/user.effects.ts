import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from '../../services/user/user.service';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {

  private actions$ =  inject(Actions);

  constructor(
    private userService: UserService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map(users => UserActions.loadUsersSuccess({ users })),
          catchError(error => of(UserActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  loadUserById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUserById),
      mergeMap(action =>
        this.userService.getUserById(action.id).pipe(
          map(user => UserActions.loadUserByIdSuccess({ user })),
          catchError(error => of(UserActions.loadUserByIdFailure({ error })))
        )
      )
    )
  );

  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.addUser),
      mergeMap(action =>
        this.userService.addUser(action.user).pipe(
          map(user => UserActions.addUserSuccess({ user })),
          catchError(error => of(UserActions.addUserFailure({ error })))
        )
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      mergeMap(action =>
        this.userService.updateUser(action.user).pipe(
          map(user => UserActions.updateUserSuccess({ user })),
          catchError(error => of(UserActions.updateUserFailure({ error })))
        )
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
      mergeMap(action =>
        this.userService.deleteUser(action.id).pipe(
          map(() => UserActions.deleteUserSuccess({ id: action.id })),
          catchError(error => of(UserActions.deleteUserFailure({ error })))
        )
      )
    )
  );
}