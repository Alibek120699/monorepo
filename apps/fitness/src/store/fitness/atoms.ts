import { atom } from 'recoil';

import { Fitness } from './models';

export const LimitAtom = atom({
  key: 'FitnessListLimitAtom',
  default: 10,
});

export const PageAtom = atom({
  key: 'FitnessListPageAtom',
  default: 1,
});

const initialFitnessList: Fitness[] = [];
export const FitnessListAtom = atom({
  key: 'FitnessListAtom',
  default: initialFitnessList,
});
