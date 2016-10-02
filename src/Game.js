import { positions } from './utils/Constants';

export function observe(receive) {
  setInterval(() => receive(
    positions
    // positions.sortBy(() => Math.random())
  ), 500);
}
