import Immutable from 'immutable';

import {
  API_ERROR,
  GET_ORDERS,
} from '../actions/orderActions';

const initialState = Immutable.fromJS({
  orders: Immutable.List(),
});

export default function (state = initialState, action) {
  switch (action.type) {
    case API_ERROR: {
      return state.setIn(['error'], Immutable.fromJS(action.payload));
    }
    case GET_ORDERS: {
      return state.setIn(['orders'], Immutable.fromJS(action.payload));
    }
    default: {
      return state;
    }
  }
}