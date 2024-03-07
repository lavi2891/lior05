export class Task {
    id: number;
    task_description: string;
    task_creation_date: Date;
    customer_id: number;
    task_completed: boolean;
    customer_name: string;
  
    constructor(
      id: number,
      task_description: string,
      task_creation_date: Date,
      customer_id: number,
      task_completed: boolean,
      customer_name: string
    ) {
      this.id = id;
      this.task_description = task_description;
      this.task_creation_date = task_creation_date;
      this.customer_id = customer_id;
      this.task_completed = task_completed;
      this.customer_name = customer_name;
    }
  }
  