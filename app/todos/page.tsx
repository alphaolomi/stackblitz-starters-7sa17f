"use client";
import { useAtom } from "jotai";
import Link from "next/link";
import { todoListAtom } from "../atoms";

const ListPage = () => {
  const [todoList] = useAtom(todoListAtom);

  return (
    <div>
      <h1>Todo List</h1>
      <Link href="/">Home</Link>
      <br />
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
