import { atomWithStorage } from 'jotai/utils';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const todosAtom = atomWithStorage<Todo[]>('todos', []);
