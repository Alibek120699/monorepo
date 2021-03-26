import { atom } from 'recoil';

export const TodoListAtom = atom({
  key: 'TodoListAtom',
  default: [
    {
      userId: 1,
      id: 1,
      title: 'task1',
      completed: true,
    },
    {
      userId: 2,
      id: 2,
      title: 'task2',
      completed: true,
    },
  ],
});
