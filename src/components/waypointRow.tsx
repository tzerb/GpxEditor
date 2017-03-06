import * as React from 'react'

import {waypoint} from '../utils/gpxFile'; // TODO TZ Shouldn't rely on gpxFile, should be an intermediate class

export interface WaypointRowProps
{
    waypoint : waypoint;
    editWaypoint : any;
    deleteWaypoint : any;
}

export interface WaypointRowState
{
}

export class WaypointRow extends React.Component<WaypointRowProps, WaypointRowState>  {
    constructor(props:WaypointRowProps, context : any)    {
        super(props, context);
        this.editWaypoint = this.editWaypoint.bind(this);
    }
   
    editWaypoint(event:any)
    {
        event.preventDefault();
        this.props.editWaypoint(this.props.waypoint);
    }
    render() {
        return  <div><div><a href="" onClick={this.editWaypoint}><i className="icon-pencil"></i>edit</a> {this.props.waypoint.name} - {this.props.waypoint.id} - ({this.props.waypoint.lat}, {this.props.waypoint.lon})</div></div>;
    }
}

export default WaypointRow