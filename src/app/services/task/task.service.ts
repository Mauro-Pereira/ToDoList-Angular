import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../model/task/task';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:8080/task';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/listAllTask`);
  }

  getMyTasks(userId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/getMyTasks/${userId}`);
  }

  addTask(task: Task, userId: string): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/registerTask/${userId}`, task);
  }

  updateTask(userId: string, taskId: string, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/updateTask/${userId}/${taskId}`, task);
  }

  deleteTask(userId: string, taskId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteUserTask/${userId}/${taskId}`);
  }
}
