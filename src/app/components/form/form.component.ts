import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  inputTodo: string = "";

  @Output() saveTodo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(){
    this.saveTodo.emit(this.inputTodo);
    this.inputTodo = "";
  }

}
