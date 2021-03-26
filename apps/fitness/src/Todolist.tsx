import { useRecoilValue } from 'recoil';
import { TodoListSelector } from 'src/store/selectors';

import { Todo } from 'src/store/models';

export default function Todolist() {
  const todos = useRecoilValue(TodoListSelector);

  return (
    <>
      <h1>Selector</h1>
      {todos.map((t: Todo) => (
        <div>{t.title}</div>
      ))}
    </>
  );
}
