# To Do List з віртуалізацією

## Стек
- React 19
- Redux
- Redux-Saga
- Vite

## Функціонал
- Завантаження 1000 to-do елементів (емуляція API).
- Віртуалізоване відображення (рендериться лише видима частина).
- Додавання, редагування, видалення, перемикання виконання.

## Запуск
1. Встановити залежності:
```bash
npm install
```
2. Запустити dev-сервер:
```bash
npm run dev
```
3. Відкрити у браузері посилання з консолі (зазвичай `http://localhost:5173`).

## Структура даних
- Початкові 1000 елементів згенеровано у `src/data/todos.js`.
- Емуляція API у `src/api/todosApi.js` (Promises + setTimeout).

## Ключові частини
- Саги: `src/store/sagas/todosSaga.js` + підключення `src/store/sagas/index.js`.
- Редʼюсер: `src/store/reducers/todosReducer.js`.
- Дії: `src/store/actions/todosActions.js`, типи: `src/store/types/todosTypes.js`.
- Віртуалізація: `src/shared/ui/VirtualizedList/VirtualizedList.jsx`.
- Елементи списку: `src/features/todos/ui/TodoItem.jsx`.
- Головний екран: `src/App.jsx`.
