import { useRecoilValue } from 'recoil';
import { FitnessListSelector } from 'src/store/fitness/selectors';

import { Fitness } from 'src/store/fitness/models';

export default function FitnessList() {
  const fitnesses = useRecoilValue(FitnessListSelector);

  if (fitnesses === 'error') {
    return <div>error</div>;
  }
  return (
    <>
      <h1>Selector</h1>
      {fitnesses.map((f: Fitness) => (
        <div key={f.id}>{f.name}</div>
      ))}
    </>
  );
}
