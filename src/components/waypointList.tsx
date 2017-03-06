import * as React from 'react'

import {waypoint} from '../utils/gpxFile'; // TODO TZ Shouldn't rely on gpxFile, should be an intermediate class
import {WaypointRow} from './waypointRow';

export interface WaypointListProps
{
    waypoints : waypoint[];
    editWaypoint : any;
    deleteWaypoint : any;
}

export interface WaypointListState
{
}

export class WaypointList extends React.Component<WaypointListProps, WaypointListState>  {
    constructor(props:WaypointListProps, context : any)    {
        super(props, context);

    }
   
    render() {
        return <div>
                        {
                            this.props.waypoints.map((wp:any) => <WaypointRow key={wp.id} waypoint={wp} deleteWaypoint={this.props.deleteWaypoint} editWaypoint={this.props.editWaypoint} />
                        )}           
        </div>
    }
}
//
export default WaypointList