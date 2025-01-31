import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { UserEffects } from './store/user-store/user.effects';
import { TaskEffects } from './store/task-store/task.effects';
import { taskReducer } from './store/task-store/task.reducer';
import { userReducer } from './store/user-store/user.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideEffects([UserEffects, TaskEffects]),
    provideStore({
      users: userReducer,
      tasks: taskReducer
    }),
    provideHttpClient()
  
  ]
};
