import { Component } from '@angular/core';
import { RouterOutlet , RouterLink} from '@angular/router';
import { TodosComponent } from "./MyComponents/todos/todos.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, TodosComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bn-todo-list';
}
