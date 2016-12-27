import { combineReducers } from 'redux';
//import fuelSavings from './fuelSavingsReducer';
import waypoints from './waypointReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
//  fuelSavings,
  waypoints,
  routing: routerReducer
});

export default rootReducer;
