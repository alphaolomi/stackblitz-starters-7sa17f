'use client'
import { useAtom } from 'jotai';
import { todosAtom, Todo } from '../atoms';

const ListPage = () => {
  const [todos] = useAtom(todosAtom);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
