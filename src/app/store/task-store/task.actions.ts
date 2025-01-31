import { createAction, props } from '@ngrx/store';
import { Task } from '../../model/task/task';

export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksSuccess = createAction('[Task] Load Tasks Success', props<{ tasks: Task[] }>());
export const loadTasksFailure = createAction('[Task] Load Tasks Failure', props<{ error: any }>());

export const loadMyTasks = createAction('[Task] Load My Tasks', props<{ userId: string }>());
export const loadMyTasksSuccess = createAction('[Task] Load My Tasks Success', props<{ tasks: Task[] }>());
export const loadMyTasksFailure = createAction('[Task] Load My Tasks Failure', props<{ error: any }>());

export const addTask = createAction('[Task] Add Task', props<{ task: Task, userId: string }>());
export const addTaskSuccess = createAction('[Task] Add Task Success', props<{ task: Task }>());
export const addTaskFailure = createAction('[Task] Add Task Failure', props<{ error: any }>());

export const updateTask = createAction('[Task] Update Task', props<{ userId: string, taskId: string, task: Task }>());
export const updateTaskSuccess = createAction('[Task] Update Task Success', props<{ task: Task }>());
export const updateTaskFailure = createAction('[Task] Update Task Failure', props<{ error: any }>());

export const deleteTask = createAction('[Task] Delete Task', props<{ userId: string, taskId: string }>());
export const deleteTaskSuccess = createAction('[Task] Delete Task Success', props<{ taskId: string }>());
export const deleteTaskFailure = createAction('[Task] Delete Task Failure', props<{ error: any }>());