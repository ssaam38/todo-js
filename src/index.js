
import './styles.css';
//import { Todo } from './classes/todo.class';
//import { TodoList } from './classes/todo-list.class';
import {Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

//const Tarea = new Todo('Aprender javascript??');

export const todoList = new TodoList();
 console.log(todoList.todos);

 todoList.todos.forEach(todo => crearTodoHtml(todo));

 //todoList.todos[0].imprimirClase();

 //const newTodo = new Todo('aprender javascript');
 //todoList.nuevoTodo(newTodo);
//newTodo.imprimirClase();
 console.log('todos', todoList.todos);
//todoList.nuevoTodo(Tarea);

//crearTodoHtml(Tarea);

//console.log(todoList);

//localStorage.setItem('mi-key', 'ABC123');
//sessionStorage.setItem('mi-key', 'ABC123');
//setTimeout(()=>{
//localStorage.removeItem('mi-key');
//
//}, 1500);