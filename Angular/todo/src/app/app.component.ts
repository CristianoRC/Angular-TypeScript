import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-root', // <app-root/>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public todos: Array<Todo> = [];
  public title = 'Minhas tarefas';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose(
        [Validators.minLength(2),
        Validators.maxLength(25),
        Validators.required])]
    });
    this.load();
  }


  add() {
    const tile = this.form.controls.title.value;
    const id = this.todos.length;
    this.todos.push(new Todo(tile, false, id));
    this.clearForm();
    this.save();
  }

  clearForm() {
    this.form.reset();
  }

  remove(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.save();
    }
  }

  markAsDone(todo: Todo): void {
    todo.done = true;
    this.save();
  }

  save() {
    const jsonData = JSON.stringify(this.todos);

    localStorage.setItem('todos', jsonData);
  }

  load() {
    const jsonData = localStorage.getItem('todos');
    this.todos = JSON.parse(jsonData);
  }
}


