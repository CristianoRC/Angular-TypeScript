import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-root', // <app-root/>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Array<Todo> = [];
  public title = 'Minhas tarefas';

  constructor() {
    this.todos.push(new Todo('C#', true, 0));
    this.todos.push(new Todo('Angular', false, 1));
    this.todos.push(new Todo('TypeScript', false, 2));
  }

  remove(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }



  markAsDone(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos[index].done = true;
    }
  }
}


