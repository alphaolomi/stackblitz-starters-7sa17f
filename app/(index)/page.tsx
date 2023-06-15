'use client'
import { useAtom } from 'jotai'
import Link from 'next/link'
import { todoListAtom, Todo } from '../atoms'

const IndexPage = () => {
  const [todoList, setTodoList] = useAtom(todoListAtom)

  const handleAddTodo = () => {
    const newTodo: Todo = {
      id: Date.now(),
      text: 'New Todo',
      completed: false,
    }
    setTodoList((prevList) => [...prevList, newTodo])
  }

  const handleRemoveTodo = (id: number) => {
    setTodoList((prevList) => prevList.filter((todo) => todo.id !== id))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <Link href='/todos'>Stats</Link>
      <br />
      <button onClick={handleAddTodo}>Add Todo</button>
      <br />
      <ul
        style={{
          border: '1px solid #ccc',
        }}
      >
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <pre>
        <code>{JSON.stringify(todoList, null, 2)}</code>
      </pre>
    </div>
  )
}

export default IndexPage
