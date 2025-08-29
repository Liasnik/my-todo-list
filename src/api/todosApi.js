import todos from '../data/todos';

export const fetchTodos = () =>
  new Promise(resolve => setTimeout(() => resolve(todos), 1000));

export const addTodoApi = (text) =>
  new Promise(resolve => setTimeout(() => {
    resolve({ id: Date.now(), text, completed: false });
  }, 300));

export const updateTodoApi = (id, patch) =>
  new Promise(resolve => setTimeout(() => {
    resolve({ id, ...patch });
  }, 300));

export const deleteTodoApi = (id) =>
  new Promise(resolve => setTimeout(() => resolve(id), 300));
