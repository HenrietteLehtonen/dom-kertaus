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

// NPM I !!

// add your code here
const kohde = document.querySelector('#target');

for (const todo of todoList) {
  let checkAttr = '';
  // tsekataan onko completed true -> laitetaan automaattisesti raksi
  if (todo.completed === true) {
    checkAttr = 'checked';
  }
  // lisätään lista html puolelle
  const html = `<li>
                <input type="checkbox" id="todo-${todo.id}" ${checkAttr}>
                <label for="todo-${todo.id}">${todo.task}</label>
              </li>`;

  kohde.insertAdjacentHTML('beforeend', html);
}

// for todo id -> yhdistää labelin, voidaan klikata koko tsydeemiä, ei pelkästään checkboxia
