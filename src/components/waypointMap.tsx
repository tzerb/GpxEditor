import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {waypoint} from '../utils/gpxFile';

let Map = require('google-maps-react').Map;
let InfoWindow = require('google-maps-react').InfoWindow;
let Marker = require('google-maps-react').Marker;
let GoogleApiWrapper = require('google-maps-react').GoogleApiWrapper;

export interface WaypointMapProps
{
    loaded?:Boolean,
    google?:any;
    waypoints : waypoint[];
    pictures : any[];
    initialCenter : waypoint; //todo tz position
}

export interface WaypointMapState
{
    activeMarker?: any;
    newMarker?: any;
    showingInfoWindow?: boolean;
    activeWaypoint?: any; 
    activePicture?: any;
}

export class WaypointMap extends React.Component<WaypointMapProps, WaypointMapState>  {
  constructor(props : WaypointMapProps, context : any) {
    super(props, context);
    this.state = {
      activeMarker:null, showingInfoWindow:false,activePicture:null, activeWaypoint:null 
    };

    this.onClick = this.onClick.bind(this);
    this.onWaypointMarkerClick = this.onWaypointMarkerClick.bind(this);
    this.onPictureMarkerClick = this.onPictureMarkerClick.bind(this);
  }

  onWaypointMarkerClick(props : any, marker : any, event : any){
    this.setState({
      activeMarker:marker, showingInfoWindow:true,activePicture:null, activeWaypoint:props.waypoint 
    });
  }

  onPictureMarkerClick(props : any, marker : any, event : any){
    this.setState({
      activeMarker:marker, showingInfoWindow:true,activePicture:props.picture, activeWaypoint:null 
    });
  }

  onMouseOver()
  {
    alert('onMouseOver');
  }

  onClick(props : any, map : any, event : any)
  {
    alert('onClick(' + event.latLng.lat() + ", " + event.latLng.lng() + ")");

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

  getWaypointInfoWindow(waypoint:any)
  {
    return (waypoint) ? <div>{waypoint.name}</div> : <div/>;
  }

  getPictureInfoWindow(picture:any)
  {
    return (picture) ? <div>{picture.description}</div> : <div/>;
  }

  getInfoWindow()
  {
      return (        
        <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            {this.state.activeWaypoint ? this.getWaypointInfoWindow(this.state.activeWaypoint) : this.getPictureInfoWindow(this.state.activePicture)}
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
            style={{}}
            className={'map'}
            zoom={9} 
            initialCenter={{ lat: this.props.initialCenter.lat, lng: this.props.initialCenter.lon }}
            >
          {this.props.pictures.map((pic) =>
            <Marker key={i++} 
              onClick={this.onPictureMarkerClick}
              onMouseOver={this.onMouseOver}
              name={pic.description} picture={pic} label={'here'}
              position={{ lat: pic.lat, lng:pic.lon }} />
          )}

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
//  GoogleApiWrapper({
//   apiKey: 'AIzaSyCG_KuXMd6mrgAzrRcgXr91Yr6Ed03VNaw',
//   version: 3.26
// }
// )(WaypointMap)


