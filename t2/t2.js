'use strict';

// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

const lista = document.querySelector('#target');

for (const todo of todoList) {
  // tehdään checkbox
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = 'todo-' + todo.id;
  input.checked = todo.completed;

  // label
  const label = document.createElement('label');
  label.htmlFor = 'todo-' + todo.id; // <label for =" todo- + numero(id)"
  label.innerText = todo.task;

  // lista
  const li = document.createElement('li');
  li.appendChild(input); // listaan lisätään input
  li.appendChild(label); // listaan lisätään label

  lista.appendChild(li);
}
