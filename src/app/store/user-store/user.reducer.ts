import { createReducer, on } from '@ngrx/store';
import { User } from '../../model/user/user';
import * as UserActions from './user.actions';

export interface UserState {
  users: User[];
  selectedUser: User | null;
  loading: boolean;
  error: any;
}

export const initialState: UserState = {
  users: [],
  selectedUser: null,
  loading: true,
  error: null
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
  on(UserActions.loadUserByIdSuccess, (state, { user }) => ({ ...state, selectedUser: user, loading: false })),
  on(UserActions.addUserSuccess, (state, { user }) => ({ ...state, users: [...state.users, user] })),
  on(UserActions.updateUserSuccess, (state, { user }) => ({
    ...state,
    users: state.users.map(u => u.id === user.id ? user : u)
  })),
  on(UserActions.deleteUserSuccess, (state, { id }) => ({
    ...state,
    users: state.users.filter(u => u.id !== id)
  })),
  on(
    UserActions.loadUsersFailure,
    UserActions.loadUserByIdFailure,
    UserActions.addUserFailure,
    UserActions.updateUserFailure,
    UserActions.deleteUserFailure,
    (state, { error }) => ({ ...state, error })
  )
);