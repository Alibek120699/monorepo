import { Suspense } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { LimitAtom, PageAtom } from 'src/store/fitness/atoms';
import FitnessList from 'src/FitnessList';

const Flex = styled.div<{ dir?: string }>`
  display: flex;
  flex-direction: ${(props) => props.dir || 'row'};
  justify-content: center;
  align-items: center;
`;

function App() {
  const [limit, setLimit] = useRecoilState(LimitAtom);
  const [page, setPage] = useRecoilState(PageAtom);

  const changePage = (p: number) => setPage(p);

  const changeLimit = ({ target: { value } }: any) => {
    setLimit(parseInt(value));
  };

  return (
    <Flex dir="column">
      <button disabled={page === 5} onClick={() => changePage(page + 1)}>
        next
      </button>
      <button disabled={page === 1} onClick={() => changePage(page - 1)}>
        prev
      </button>
      <select value={limit} onChange={changeLimit}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
      <Suspense fallback={<div>Loading...</div>}>
        <FitnessList />
      </Suspense>
    </Flex>
  );
}

export default App;
