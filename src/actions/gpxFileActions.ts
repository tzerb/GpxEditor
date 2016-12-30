import * as types from '../constants/actionTypes';

export function saveWaypointsSuccess(waypoints:any[]) : any
{
    return {
        type: types.SAVE_GPX_FILE,
        waypoints
    };
}

export function saveWaypoints(waypoints:any[]) {
    return saveWaypointsSuccess(waypoints);
}

