import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task, TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css'],
})
export class ListCardComponent implements OnInit {
  @Input() id: number = -1;
  @Output() deleteEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  task: Task = {
    id: -1,
    title: '',
    detail: '',
    state: '未着手',
  };
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // 初期化処理
    // homeから渡されたidに一致するタスクを探して表示
    const _task = this.taskService.findTask(this.id);
    if (_task) {
      this.task = _task;
    }
  }

  /* タスクの削除 */
  deleteTask() {
    this.taskService.deleteTask(this.id);
    this.deleteEvent.emit(true);
  }
}
