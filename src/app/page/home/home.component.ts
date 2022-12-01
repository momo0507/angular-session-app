import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { Task, TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];
  // tasks$: Observable<Task[]>;
  constructor(private taskService: TaskService) {
    // this.tasks$ = this.taskService.tasks$;
    this.tasks = this.taskService.tasks;
  }

  ngOnInit(): void {
    // this.taskService.fetchTask();
  }
  fetchTask(){
    this.tasks = this.taskService.tasks;
  }
}
