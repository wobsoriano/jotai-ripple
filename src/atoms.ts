import { atom } from 'jotai/vanilla';

export const countAtom = atom(0);
export const doubledCountAtom = atom((get) => get(countAtom) * 2);

export const citiesAtom = atom(['Tokyo', 'Kyoto', 'Osaka'])