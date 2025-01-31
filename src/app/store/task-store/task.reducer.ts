import { createReducer, on } from '@ngrx/store';
import { Task } from '../../model/task/task';
import * as TaskActions from './task.actions';

export interface TaskState {
  tasks: Task[];
  myTasks: Task[];
  error: any;
}

export const initialState: TaskState = {
  tasks: [],
  myTasks: [],
  error: null
};

export const taskReducer = createReducer(
  initialState,
  on(TaskActions.loadTasksSuccess, (state, { tasks }) => ({ ...state, tasks })),
  on(TaskActions.loadMyTasksSuccess, (state, { tasks }) => ({ ...state, myTasks: tasks })),
  on(TaskActions.addTaskSuccess, (state, { task }) => ({ ...state, tasks: [...state.tasks, task] })),
  on(TaskActions.updateTaskSuccess, (state, { task }) => ({
    ...state,
    tasks: state.tasks.map(t => t.id === task.id ? task : t)
  })),
  on(TaskActions.deleteTaskSuccess, (state, { taskId }) => ({
    ...state,
    tasks: state.tasks.filter(t => t.id !== taskId)
  })),
  on(
    TaskActions.loadTasksFailure,
    TaskActions.loadMyTasksFailure,
    TaskActions.addTaskFailure,
    TaskActions.updateTaskFailure,
    TaskActions.deleteTaskFailure,
    (state, { error }) => ({ ...state, error })
  )
);