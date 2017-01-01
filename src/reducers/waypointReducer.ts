
import initialState from './initialState';
import * as types from '../constants/actionTypes'

export default function waypointsReducer(state = initialState.waypoints, action:any) {

    switch(action.type) {
        case types.SAVE_GPX_FILE:
            // action.waypoints && alert(JSON.stringify(action.waypoints[0]));
     
            var newState = [...action.waypoints]; 
            return newState;

        case types.ADD_WAYPOINT:
            // alert(JSON.stringify(action.waypoint));
            var newState = [...state]; 
            newState.push(action.waypoint);
            return newState;
    }
    return state;
} 