import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../component/todo-item/todo-item.component';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);

  todoStaticItems = signal<Array<Todo>>([]);
  todoItemsAPI = signal<Array<Todo>>([]);


  //filteration
  searchTerm = signal('');

  ngOnInit(): void {
    //Call Static service call
    // console.log(this.todoService.staticTodos);
    this.todoStaticItems.set(this.todoService.staticTodos);




    //Call to API Service call
    this.todoService
      .getTodosFromJsonPlaceHolderApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((data) => {
        // this.todoItemsAPI.set(data);
        this.todoItemsAPI.set(data.slice(0, 10)); //Slice the data to show only 10 items
      });

  }

  //whenchild component checks the checkbox
  updateTodoItem(todoItem: Todo) {
    this.todoItemsAPI.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });

  }

}