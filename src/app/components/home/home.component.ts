import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newTodo!: Todo;
  todos!: Todo[];

  constructor(private todosService: TodoService) { }

  ngOnInit(): void {
    this.newTodo = new Todo();
    this.todos = this.todosService.getAll();
  }

  saveTodo(content: string){
    this.newTodo.id = (this.newTodo.id) ? this.newTodo.id : new Date().getTime().toString();
    this.newTodo.content = content;
    this.newTodo.completed = false;
    this.todos = this.todosService.getAll();
    this.todosService.save(this.newTodo);
  }

  doneTodo(id: string){
    var todoAux = this.todosService.getTodo(id);
    todoAux.completed = !todoAux.completed;
    this.todosService.save(todoAux);
  }

  removeTodo(id: string){
    var todoAux = this.todosService.getTodo(id);
    this.todosService.delete(todoAux);
  }
}
