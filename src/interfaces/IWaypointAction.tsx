import {waypoint} from '../utils/gpxFile'

export interface IWaypointAction
{
    saveWaypoints(waypoints:waypoint[]) : void;
    addWaypoint(waypoint:waypoint) : void;
}