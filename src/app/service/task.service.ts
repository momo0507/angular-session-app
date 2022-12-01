import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
export interface Task {
  id: number;
  title: string;
  state: State;
  detail: string;
}
export type State = '未着手' | '処理中' | '完了';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tasks: Task[] = [
    { id: 1, title: '資料作成', state: '処理中', detail: '12/31まで' },
    {
      id: 2,
      title: '資料提出',
      state: '未着手',
      detail: '鈴木さんに提出',
    },
    { id: 3, title: 'スライド作成', state: '完了', detail: '12/15日まで' },
  ];
  // private _tasks$: BehaviorSubject<Task[]>;

  constructor() {
    // this._tasks$ = new BehaviorSubject(this._tasks);
    // this._tasks$.next(this._tasks);
  }

  // get tasks$() {
  //   return this._tasks$.asObservable();
  // }

  get tasks() {
    return this._tasks;
  }

  /** タスクを追加する */
  addTask(task: Task) {
      // 新規
      let length = this._tasks.length;
      if (length < 1) {
        task.id = 1;
      } else {
        task.id = this._tasks[length - 1].id + 1;
      }
      this._tasks.push(task);
      // this._tasks$.next(this._tasks);
  }

  /** 編集 */
  editTask(task:Task){
    this._tasks = this._tasks.map((t) => {
      // idが一致するときは情報を上書きする
      if (t.id == task.id) {
        t.title = task.title;
        t.detail = task.detail;
        t.state = task.state;
      }
      return t;
    });
    // this._tasks$.next(this._tasks);
  }

  /** タスクを削除する */
  deleteTask(id: number) {
    const _tasks = this._tasks.filter((f) => f.id !== id);
    this._tasks = _tasks;
    // this._tasks$.next(this._tasks);
  }

  /** タスクをidから探す */
  findTask(id: number) {
    return this._tasks.find((f) => f.id == id);
  }

  /** タスクを検索する */
  fetchTask(req?: { title?: string; state?: State; detail?: string }) {
    if (!req) {
      // reqがなければ全件を返却
      // this._tasks$.next(this._tasks);
      return this.tasks;
    }
    let result: Task[] = this._tasks;
    if (req.title) {
      result = result.filter((f) => f.title == req.title);
    }
    if (req.state) {
      result = result.filter((f) => f.title == req.title);
    }
    if (req.detail) {
      result = result.filter((f) => {
        if (req.detail && f.detail.indexOf(req.detail) > -1) {
          return true;
        } else {
          return false;
        }
      });
    }
    // this._tasks$.next(result);
    return result;
  }
}
