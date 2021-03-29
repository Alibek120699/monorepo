import { UnparsedFitness, Fitness } from './models';

export const parseFitness = (uf: UnparsedFitness): Fitness => ({
  id: uf.id,
  name: uf.name,
});
