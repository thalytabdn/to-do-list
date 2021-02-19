import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos!: Todo[];
  @Output() toggleTodo = new EventEmitter();
  @Output() removeTodo = new EventEmitter();

  toggleDone(id: string){
    this.toggleTodo.emit(id);
  }

  deleteTodo(id: string){
    this.removeTodo.emit(id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
