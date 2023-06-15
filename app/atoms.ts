import { atomWithStorage } from 'jotai/utils';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const todoListAtom = atomWithStorage<Todo[]>('todoList', []);

if (process.env.NODE_ENV !== 'production') {
  todoListAtom.debugLabel = 'todoList';
}