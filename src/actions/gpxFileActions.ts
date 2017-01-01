import * as types from '../constants/actionTypes';
import {waypoint} from '../utils/gpxFile'

export function saveWaypointsSuccess(waypoints:waypoint[]) : any
{
    return {
        type: types.SAVE_GPX_FILE,
        waypoints
    };
}

export function addWaypointSuccess(waypoint:waypoint): any
{
    return {
        type: types.ADD_WAYPOINT,
        waypoint
    };
}

export function saveWaypoints(waypoints:waypoint[]) {
    return saveWaypointsSuccess(waypoints);
}

export function addWaypoint(waypoint:waypoint) {
    return addWaypointSuccess(waypoint);
}
