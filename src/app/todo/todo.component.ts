import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  newTodo: string = '';
  todos: Todo[] = [];

  addTodo() {
    if (this.newTodo.trim().length) {
      this.todos.push({ title: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  toggleTodoCompletion(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

}
