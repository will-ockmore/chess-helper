import { Map } from 'immutable';

import * as actions from './actions';


export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return action.payload.positions;
    case actions.DROP_PIECE:
      const { x, y, charCode } = action.payload;
      return state.setIn([x, y], charCode);
    default:
      return state;
  }
}
