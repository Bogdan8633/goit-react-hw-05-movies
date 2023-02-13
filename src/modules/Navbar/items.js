import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Home',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Movies',
    link: '/movies-search',
  },
];
export default items;
