import { createAction, props } from '@ngrx/store';
import { User } from '../../model/user/user';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[] }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: any }>());

export const loadUserById = createAction('[User] Load User By Id', props<{ id: string }>());
export const loadUserByIdSuccess = createAction('[User] Load User By Id Success', props<{ user: User }>());
export const loadUserByIdFailure = createAction('[User] Load User By Id Failure', props<{ error: any }>());

export const addUser = createAction('[User] Add User', props<{ user: User }>());
export const addUserSuccess = createAction('[User] Add User Success', props<{ user: User }>());
export const addUserFailure = createAction('[User] Add User Failure', props<{ error: any }>());

export const updateUser = createAction('[User] Update User', props<{ user: User }>());
export const updateUserSuccess = createAction('[User] Update User Success', props<{ user: User }>());
export const updateUserFailure = createAction('[User] Update User Failure', props<{ error: any }>());

export const deleteUser = createAction('[User] Delete User', props<{ id: string }>());
export const deleteUserSuccess = createAction('[User] Delete User Success', props<{ id: string }>());
export const deleteUserFailure = createAction('[User] Delete User Failure', props<{ error: any }>());