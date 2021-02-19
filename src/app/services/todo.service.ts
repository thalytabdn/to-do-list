import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private localStorage: LocalStorageService) { }

  delete(todo: Todo){
    this.localStorage.remove(todo.id);
  }

  save(todo: Todo){
    this.localStorage.set(todo.id,todo);
  }

  getTodo(id: string): Todo{
    return this.localStorage.get(id);
  }

  getAll(): Todo[]{
    return this.localStorage.keys().map(id => this.getTodo(id));
  }
}
