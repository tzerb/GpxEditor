import * as React from 'react'

import {waypoint} from '../utils/gpxFile'; // TODO TZ Shouldn't rely on gpxFile, should be an intermediate class

export interface WaypointCardProps
{
    waypoint:waypoint;
}

export interface WaypointCardState
{
}

export class WaypointCard extends React.Component<WaypointCardProps, WaypointCardState>  {
    constructor(props:WaypointCardProps, context : any)    {
        super(props, context);

    }
   
    render() {
        return <div>Name: {this.props.waypoint.name}<br/>Date: {this.props.waypoint.time}</div>
    }
}

export default WaypointCard