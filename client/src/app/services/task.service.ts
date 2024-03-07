import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Method to fetch all tasks with relevant customer information
  getTasksList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/tasks`);
  }

  // Method to add a new task
  addTodoList(task: Task): Observable<any> {
    return this.http.post<Task>(`${this.apiUrl}/api/tasks`, task);
  }
  
}