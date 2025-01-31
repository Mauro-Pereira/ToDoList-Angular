import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TaskService } from '../../services/task/task.service';
import * as TaskActions from './task.actions';

@Injectable()
export class TaskEffects {

  private actions$ =  inject(Actions);

  constructor(
    private taskService: TaskService
  ) {}

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      mergeMap(() =>
        this.taskService.getTasks().pipe(
          map(tasks => TaskActions.loadTasksSuccess({ tasks })),
          catchError(error => of(TaskActions.loadTasksFailure({ error })))
        )
      )
    )
  );

  loadMyTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadMyTasks),
      mergeMap(action =>
        this.taskService.getMyTasks(action.userId).pipe(
          map(tasks => TaskActions.loadMyTasksSuccess({ tasks })),
          catchError(error => of(TaskActions.loadMyTasksFailure({ error })))
        )
      )
    )
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.addTask),
      mergeMap(action =>
        this.taskService.addTask(action.task, action.userId).pipe(
          map(task => TaskActions.addTaskSuccess({ task })),
          catchError(error => of(TaskActions.addTaskFailure({ error })))
        )
      )
    )
  );

  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.updateTask),
      mergeMap(action =>
        this.taskService.updateTask(action.userId, action.taskId, action.task).pipe(
          map(task => TaskActions.updateTaskSuccess({ task })),
          catchError(error => of(TaskActions.updateTaskFailure({ error })))
        )
      )
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.deleteTask),
      mergeMap(action =>
        this.taskService.deleteTask(action.userId, action.taskId).pipe(
          map(() => TaskActions.deleteTaskSuccess({ taskId: action.taskId })),
          catchError(error => of(TaskActions.deleteTaskFailure({ error })))
        )
      )
    )
  );
}