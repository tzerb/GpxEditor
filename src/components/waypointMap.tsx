import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {waypoint} from '../utils/gpxFile'; // TODO TZ Shouldn't rely on gpxFile, should be an intermediate class

let Map = require('google-maps-react').Map;
let InfoWindow = require('google-maps-react').InfoWindow;
let Marker = require('google-maps-react').Marker;
let GoogleApiWrapper = require('google-maps-react').GoogleApiWrapper;

var mapStyle = {
  height: "600px",
  width: "80%"
}

export interface WaypointMapProps
{
    loaded?:Boolean,
    google?:any;
    waypoints : waypoint[];
    initialCenter : waypoint; //todo tz position
    getWaypointDisplay(waypoint:waypoint):any;
    addWaypoint(waypoint:waypoint):any;
}

export interface WaypointMapState
{
    activeMarker?: any;
    newMarker?: any;
    showingInfoWindow?: boolean;
    activeWaypoint?: waypoint; 
}
 
export class WaypointMap extends React.Component<WaypointMapProps, WaypointMapState>  {
  constructor(props : WaypointMapProps, context : any) {
    super(props, context);
    this.state = {
      activeMarker:null, showingInfoWindow:false, activeWaypoint:null 
    };

    //this.onClick = this.onClick.bind(this);
    //this.onWaypointMarkerClick = this.onWaypointMarkerClick.bind(this);
  }

  onWaypointMarkerClick = (props : any, marker : any, event : any) => {
    this.setState({
      activeMarker:marker, showingInfoWindow:true, activeWaypoint:props.waypoint 
    });
  }

  onMouseOver()
  {
    alert('onMouseOver');
  }
 
  onClick = (props : any, map : any, event : any)  =>
  {
    this.props.addWaypoint(waypoint.fromLatLong("New Waypoint", event.latLng.lat(),  event.latLng.lng() ))
    //alert('onClick(' + event.latLng.lat() + ", " + event.latLng.lng() + ")");

    // var newWaypoint = {
    //   latitude:event.latLng.lat(), longitude:event.latLng.lng() 
    // };

    // var newMarker = 
    //         <Marker key={0} 
    //           name={'new marker'} waypoint={newWaypoint}
    //           position={{ lat: newWaypoint.latitude, lng:newWaypoint.longitude }} />

    // this.setState({
    //   newMarker:newMarker, activeMarker:newMarker, showingInfoWindow:true,activePicture:null, activeWaypoint:newWaypoint 
    // });    
  }


  getInfoWindow()
  {
      return (        
        <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            {this.state.activeWaypoint ? this.props.getWaypointDisplay(this.state.activeWaypoint) : <div/>}
          </InfoWindow>);
  }

  render() {
    var i =0;
    //alert('Render ' + this.props.waypoints.length);
    //{ lat: 44.5, lng: -88 }
    return(
      this.props.loaded ?
        <Map google={this.props.google} 
            onClick={this.onClick}
            style={mapStyle}
            zoom={9} 
            initialCenter={{ lat: this.props.initialCenter.lat, lng: this.props.initialCenter.lon }}
            >
          {this.props.waypoints.map((wp) =>
            <Marker key={i++} 
              onClick={this.onWaypointMarkerClick}
              onMouseOver={this.onMouseOver}
              name={wp.name} waypoint={wp} label={'here'}
              position={{ lat: wp.lat, lng: wp.lon }} />
          )}
          {this.getInfoWindow()}
        </Map>
        : <div>Map loading...</div>
      );
  }
}

export default WaypointMap;
