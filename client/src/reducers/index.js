import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import sampleReducer from './sampleReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  form: formReducer,
  order: orderReducer,
  sample: sampleReducer,
});

export default rootReducer;
