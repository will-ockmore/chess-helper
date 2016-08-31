import { fromJS } from 'immutable';

import { positions } from './utils/Constants';

export function observe(receive) {
  setInterval(() => receive(
    positions.sortBy(() => Math.random())
  ), 500);
}
