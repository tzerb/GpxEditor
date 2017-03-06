
import initialState from './initialState';
import * as types from '../constants/actionTypes'
import {waypoint} from '../utils/gpxFile'; // TODO TZ Shouldn't rely on gpxFile, should be an intermediate class
var lastWaypointId = 0;
export default function waypointsReducer(state = initialState.waypoints, action:any) {

    switch(action.type) {
        case types.SAVE_GPX_FILE:
            // action.waypoints && alert(JSON.stringify(action.waypoints[0]));
     
            var newState = [...action.waypoints]; 
            return newState;

        case types.ADD_WAYPOINT:
            // alert(JSON.stringify(action.waypoint));
            var newState = [...state]; 
            var wp : waypoint;
            wp = waypoint.fromWaypoint(action.waypoint, ++lastWaypointId);
            newState.push(wp);
            return newState;
    }
    return state;
} 