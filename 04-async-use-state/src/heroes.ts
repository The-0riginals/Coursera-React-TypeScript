import shuffle from 'lodash.shuffle';
import data from './data';

export type HeroType = {
  name: string;
  alignment: string;
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
  total: number;
};

export const fetchHero = (): Promise<HeroType> => { // promise means that it will return a value in the future
  const [hero] = shuffle(data);
  return Promise.resolve(hero); 
};
