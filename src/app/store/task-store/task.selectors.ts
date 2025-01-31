import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TaskState } from './task.reducer';

export const selectTaskState = createFeatureSelector<TaskState>('tasks');

export const selectTasks = createSelector(
  selectTaskState,
  (state: TaskState) => state.tasks
);

export const selectMyTasks = createSelector(
  selectTaskState,
  (state: TaskState) => state.myTasks
);

export const selectTaskError = createSelector(
  selectTaskState,
  (state: TaskState) => state.error
);