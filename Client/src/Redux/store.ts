import { combineReducers, createStore } from 'redux';
import { userReducer } from './Reducers/userreducer';

const reducers = combineReducers({
  userReducer
});

const store = createStore(reducers);

export default store;
