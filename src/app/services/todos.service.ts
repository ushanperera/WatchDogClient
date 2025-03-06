
import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  
  //----Static--------------
  staticTodos: Array<Todo> = [
    {title: 'Learn Angular', completed: false, userId: 1, id: 1},
    {title: 'Learn .Net', completed: false, userId: 1, id: 2},
    {title: 'Learn SQL', completed: false, userId: 1, id: 3},];
//---------------------------

  
  //----Call fo API----------
  http = inject(HttpClient);
  getTodosFromJsonPlaceHolderApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
  //---------------------------


}