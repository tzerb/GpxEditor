import * as React from 'react'

import {waypoint} from '../utils/gpxFile'; // TODO TZ Shouldn't rely on gpxFile, should be an intermediate class

export interface WaypointListProps
{
    waypoints : waypoint[];
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
                            this.props.waypoints.map((wp:any) => <div>{wp.name} - {wp.sym} - ({wp.lat}, {wp.lon})</div>
                        )}           
        </div>
    }
}

export default WaypointList