import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CustomerService } from '../../services/customer.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task_description: string = '';
  task_creation_date: string = '';
  customer_id: number = 0;
  customer_name: string = '';
  customers: any[] = []; // Define an array to store customers

  constructor(private taskService: TaskService, private customerService: CustomerService) {}

  ngOnInit(): void {
    // Fetch the list of customers when the component initializes
    this.fetchCustomers();
  }

  fetchCustomers(): void {
    this.customerService.getCustomers().subscribe(
      (customers) => {
        // Assuming the API returns an array of customers
        this.customers = customers;
      },
      (error) => {
        console.error('Error fetching customers:', error);
        // Handle the error, e.g., display an error message to the user
      }
    );
  }

  onSubmit(): void {
    const newTask: Task = {
      id: 0, // You can leave this as 0 if it's auto-generated on the server
      task_description: this.task_description,
      task_creation_date: new Date(this.task_creation_date),
      customer_id: this.customer_id,
      customer_name: this.customer_name,
      task_completed: false // You can set this to the default value as needed
    };
  
    this.taskService.addTodoList(newTask).subscribe(
      () => {
        console.log('Task added successfully');
        // Reset the form fields
        this.task_description = '';
        this.task_creation_date = '';
        this.customer_id = 0;
        this.customer_name = '';
      },
      (error) => {
        console.error('Error adding task:', error);
      }
    );
  }
}
