import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { State, Task, TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  title = '';
  detail = '';
  state: State = '未着手';
  id = -1;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // urlのidを取得
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const num = Number(id);
      // if (isNaN(num)) {
      //   alert('存在しないidです');
      //   this.router.navigate(['']);
      // } else {
        const task = this.taskService.findTask(num);
        console.log(task);
        if (task) {
          this.title = task.title;
          this.detail = task.detail;
          this.state = task.state;
          this.id = num;
        }
      // }
    }
  }

  async save() {
    const req: Task = {
      title: this.title,
      detail: this.detail,
      state: this.state,
      id: this.id,
    };
    if(this.id<0){
      this.taskService.addTask(req);
    }else{
      this.taskService.editTask(req);
    }
    alert('タスクを保存しました。');
    this.router.navigate(['']);
  }
}
