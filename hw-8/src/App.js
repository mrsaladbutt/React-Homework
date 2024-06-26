// Продовжуємо працювати з to do додатком
// 1. Додати чекбокс і якщо він “checked” то тудушка має стати закресленой (тобто звершена).
// 2. Додати “select” з опціями “Активний”, “Завершений” і “Всі”.
// 3. При виборі опції “Активний” показуємо тільки активні todo.
// 4. При виборі опції “Завершений” показуємо тільки не активні todo.
// 5. При виборі опції “Всі” показуємо всі todo.
// 6. Додати валідацю на поле додавання туду. Мімальна кількість символів. Максимальна кількість символів.
// 7. Якщо ввів менше ніж мімальна кількість символів показати відповідну помилку
// 8. Якщо ввів більше ніж максимальна кількість символів показати відповідну помилку
// 9.(Не обовʼязкове) Додати поле для пошуку і реалізувати пошук по всім todo

import './App.css';
import ThemeButton from './ThemeButton/ThemeButton';
import ToDolist from './ToDoList/ToDoList';

function App() {
  return (
    <div className="App" id="app">
      <ThemeButton />
      <h1>ToDo List</h1>
      <ToDolist />
    </div>
  );
}

export default App;
