
import * as objectAssign from 'object-assign';
import initialState from './initialState';
import * as types from '../constants/actionTypes'

export default function waypointsReducer(state = initialState.waypoints, action:any) {
    switch(action.type) {
      case types.SAVE_GPX_FILE:
        alert('x' + action.waypoints.length);
        var newState = [...action.waypoints]; 
        //var newState = objectAssign({}, action.waypoints);
        alert('ns' + newState.length);
        return newState;
    }
    return state;
} 