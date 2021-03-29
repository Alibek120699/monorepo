import { atom } from 'recoil';

export const LimitAtom = atom({
  key: 'FitnessListLimitAtom',
  default: 10,
});

export const PageAtom = atom({
  key: 'FitnessListPageAtom',
  default: 1,
});
