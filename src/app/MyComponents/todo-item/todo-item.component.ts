import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor(){
  }

  ngOnInit(): void {}
  
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been called");
  }
  onCheckBoxClick(todo: Todo){
    this.todoCheckbox.emit(todo);
    console.log("onCheckBoxClick has been called");
  }
}
