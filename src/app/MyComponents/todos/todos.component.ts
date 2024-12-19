import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true, //added this line 
  imports: [NgFor, TodoItemComponent, AddTodoComponent, NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  localItem: string|null;
  todos:Todo[];
  constructor(){
    this.localItem = localStorage.getItem("todos");
    if(this.localItem === null){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
  }
    ngOnInit():void {
    }

    deleteTodo(todo:Todo){
      console.log(todo);
      const index = this.todos.indexOf(todo);
      this.todos.splice(index,1); 
      localStorage.setItem("todos",JSON.stringify(this.todos));
    }
    addTodo(todo:Todo){
      console.log(todo);
      this.todos.push(todo); 
      localStorage.setItem("todos",JSON.stringify(this.todos));
    }
    
    markTodo(todo:Todo){
      const index = this.todos.indexOf(todo);
      this.todos[index].active = !this.todos[index].active; 
      localStorage.setItem("todos",JSON.stringify(this.todos));
    }
}
