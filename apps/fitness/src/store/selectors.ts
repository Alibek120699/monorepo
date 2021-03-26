import { selector } from 'recoil';

// import { TodoListAtom } from 'src/store/atoms';

export const TodoListSelector = selector({
  key: 'TodoListSelector',
  get: async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await res.json();
    // return get(TodoListAtom).concat(todos);
    return todos;
  },
});
