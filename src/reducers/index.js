import { combineReducers } from 'redux';
//import fuelSavings from './fuelSavingsReducer';
import gpxFileReducer from './gpxFileReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
//  fuelSavings,
  gpxFileReducer,
  routing: routerReducer
});

export default rootReducer;
