//rootReducer holds all the reducers
import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';

//combineReducer is the state we pass as prop in the mapToPropState functions;
export default combineReducers({
  log: logReducer, //log part of our State;
  tech: techReducer //tech part of our State;
});
