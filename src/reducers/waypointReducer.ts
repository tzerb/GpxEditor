
import initialState from './initialState';
import * as types from '../constants/actionTypes'

export default function waypointsReducer(state = initialState.waypoints, action:any) {
    switch(action.type) {
      case types.SAVE_GPX_FILE:
        var newState = [...action.waypoints]; 
        return newState;
    }
    return state;
} 