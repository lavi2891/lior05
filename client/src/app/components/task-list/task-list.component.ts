import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = []; ;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks(); // Call a method to fetch data from the service when the component initializes
  }

  getTasks(): void {
    this.taskService.getTasksList().subscribe(tasks => {
      this.tasks = tasks.map(x => ({...x, task_creation_date: new Date(x.task_creation_date).toLocaleDateString('he-IL')}))
    });
  }
}
