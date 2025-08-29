export const selectTodosState = (state) => state.todos;
export const selectTodosItems = (state) => state.todos.items;
export const selectTodosLoading = (state) => state.todos.loading;
export const selectTodosError = (state) => state.todos.error;

export const selectTodosStats = (state) => {
  const items = selectTodosItems(state);
  const total = items.length;
  const completed = items.filter(todo => todo.completed).length;
  const active = total - completed;
  return { total, completed, active };
};


