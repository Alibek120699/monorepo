import { selector } from 'recoil';

import { API_URL } from 'src/store/server';
import { request } from 'src/store/axios';

import * as atoms from './atoms';
import * as parsers from './parsers';

export const FitnessListSelector = selector({
  key: 'FitnessListSelector',
  get: async ({ get }) => {
    const url = `${API_URL}/main/fitness_centres_web/`;
    const res = await request.post(url, {
      limit: get(atoms.LimitAtom),
      offset: get(atoms.PageAtom),
    });
    const fitnesses = await res.data.fitness_centres.map(parsers.parseFitness);
    return fitnesses;
  },
});
