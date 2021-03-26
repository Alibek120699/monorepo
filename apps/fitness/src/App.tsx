import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { TodoListAtom } from 'src/store/atoms';
import Todolist from 'src/Todolist';
import { Todo } from 'src/store/models';

const Flex = styled.div<{ dir?: string }>`
  display: flex;
  flex-direction: ${(props) => props.dir || 'row'};
  justify-content: center;
  align-items: center;
`;

function App() {
  const todos = useRecoilValue(TodoListAtom);

  return (
    <Flex dir="column">
      <h1>Atoms</h1>
      {todos.map((t: Todo) => (
        <div>{t.title}</div>
      ))}
      <Suspense fallback={<div>Loading...</div>}>
        <Todolist />
      </Suspense>
    </Flex>
  );
}

export default App;
