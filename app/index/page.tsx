'use client'
import { useAtom } from 'jotai';
import { todosAtom, Todo } from '../atoms';

const IndexPage = () => {
  const [todos, setTodos] = useAtom(todosAtom);

  const handleAddTodo = () => {
    const newTodo: Todo = {
      id: Date.now(),
      text: 'New Todo',
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleRemoveTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
