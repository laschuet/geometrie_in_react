import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const reducers = {
  router: routerReducer,
};

const reducer = combineReducers(reducers);

export default reducer;
