import * as React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/gpxFileActions';
import {IWaypointAction} from '../interfaces/IWaypointAction'
import {gpxFile, waypoint} from '../utils/gpxFile';
import {WaypointMap} from '../components/waypointMap'
import {WaypointList} from '../components/waypointList'
import {WaypointCard} from '../components/WaypointCard'

// import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

let gmr = require('google-maps-react');  
let Map = gmr.Map;
let InfoWindow = gmr.InfoWindow;
let Marker = gmr.Marker;
let GoogleApiWrapper = gmr.GoogleApiWrapper;

export interface GetGpxFilePageProps
{
    google:any;
    loaded?:boolean;
    waypoints:any[];
    actions:IWaypointAction;
}

export interface GetGpxFilePageState
{
}

export class GetGpxFilePage extends React.Component<GetGpxFilePageProps, GetGpxFilePageState>  {
    
    constructor(props:GetGpxFilePageProps, context : any)    {
        super(props, context);
        this.fileChanged = this.fileChanged.bind(this);
        this.getWaypointDisplay = this.getWaypointDisplay.bind(this);
        this.addWaypoint = this.addWaypoint.bind(this);
    }

    fileChanged(ev : React.FormEvent<HTMLInputElement>)
    {
        // 
        //alert('fileChanged' + e.target.files[0].size);
        var reader = new FileReader();

        reader.readAsText((ev as any).target.files[0]);
        var saveWaypoints = this.props.actions.saveWaypoints;
        reader.onloadend = function(){

            let parser = new DOMParser()
            let xmlDom = parser.parseFromString(reader.result, "text/xml");    

            //var xmlData = reader.result;
            var loadedGpxFile = new gpxFile();
            loadedGpxFile.loadAsXml(xmlDom);
            var wps = loadedGpxFile.waypoints;

            saveWaypoints(wps)
        };
    }

    getWaypointDisplay(waypoint:waypoint)
    {
        return (waypoint) ? <WaypointCard waypoint={waypoint}/> : <div>NOPE</div>;
    }

    addWaypoint(waypoint:waypoint)
    {
        //alert(JSON.stringify(this.props.actions));
        this.props.actions.addWaypoint(waypoint);
    }

    //React.EventHandler<React.FormEvent<HTMLInputElement>>
    render() {
        return (
                    <div className="container body-content">
                    <div className="row">
                    <div className="col-md-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            Heading
                        </div><div style={{width:600, height:600}}>
                            <WaypointMap    
                                google={this.props.google}
                                loaded={this.props.loaded}
                                waypoints={this.props.waypoints}
                                initialCenter = {waypoint.fromLatLong("", "44.5", "-88")}
                                getWaypointDisplay = {this.getWaypointDisplay}
                                addWaypoint={this.addWaypoint}
                            />                    
                            </div>
                    </div>
                    </div>
                    </div>
                    <div className="row">
                    
                    <div className="col-md-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            Heading
                        </div>
                    
                                <input type="file" id="the-gpx-file-field" onChange={this.fileChanged}/>
                                <br/>Number of waypoints - {this.props.waypoints.length}<br/>
                                <WaypointList waypoints={this.props.waypoints}/>
                        </div>
                    </div>                     
                    </div>
                    </div>            
        );
    }
}

function mapStateToProps(state:any) {
    return {
        waypoints: state.waypoints
    };
}

function mapDispatchToProps(dispatch:any) {
  return {
    actions: bindActionCreators(actions as any, dispatch)
  };
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCG_KuXMd6mrgAzrRcgXr91Yr6Ed03VNaw',
  version: 3.26,
  libraries: ['places','visualization']
})(connect(mapStateToProps,mapDispatchToProps)(GetGpxFilePage))