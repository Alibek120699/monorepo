import { useRecoilValue } from 'recoil';
import { FitnessListSelector } from 'src/store/fitness/selectors';

import { Fitness } from 'src/store/fitness/models';

export default function FitnessList() {
  const fitnesses = useRecoilValue(FitnessListSelector);

  return (
    <>
      <h1>Selector</h1>
      {fitnesses.map((f: Fitness) => (
        <div key={f.id}>{f.name}</div>
      ))}
    </>
  );
}
