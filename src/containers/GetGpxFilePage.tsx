import * as React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/gpxFileActions';
import {gpxFile} from '../utils/gpxFile';

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
    waypoints:any[];
    actions:any;
}

export interface GetGpxFilePageState
{
}

export class GetGpxFilePage extends React.Component<GetGpxFilePageProps, GetGpxFilePageState>  {
    
    constructor(props:GetGpxFilePageProps, context : any)    {
        super(props, context);
        this.fileChanged = this.fileChanged.bind(this);
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

    //React.EventHandler<React.FormEvent<HTMLInputElement>>
    render() {
        return (<div className={'wrapper'}>
                    <div className={'header'}>
                        <input type="file" id="the-gpx-file-field" onChange={this.fileChanged}/>
                        <br/>Number of waypoints - {this.props.waypoints.length}<br/>
                        {
                            this.props.waypoints.map((wp:any) => <div>{wp.name} - {wp.sym} - ({wp.lat}, {wp.lon})</div>
                        )}                        
                    </div>
                    <div id="preview" >Preview
                    </div>
                    <div id="data">
                        <h2 id="name"></h2>
                        <p id="size"></p>
                        <p id="type"></p>
                    </div>
                    <div className={'content'}>
                        <Map google={this.props.google}
                            style={{}}
                            className={'map'}
                            zoom={11}
                            containerStyle={{}}
                            centerAroundCurrentLocation={false}
                            initialCenter={{lat: 44, lng: -88.49}}//(43.868350228261285, -88.45011282090896)
                            >
                            {
                                this.props.waypoints.map((wp:any) => 
                                    <Marker
                                    name={wp.name}
                                    position={{lat: wp.lat, lng: wp.lon}} />
                            )}
                        </Map>
                    </div> 
                    <div className={'list'}>

                    </div>
                </div>
        );
    }
}

function mapStateToProps(state:any) {
    //alert(JSON.stringify(state));
    return {
        waypoints: state.waypoints
    };
}

function mapDispatchToProps(dispatch:any) {
  return {
    actions: bindActionCreators(actions as any, dispatch)
  };
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(GetGpxFilePage);


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCG_KuXMd6mrgAzrRcgXr91Yr6Ed03VNaw',
  version: 3.26,
  libraries: ['places','visualization']
})(connect(mapStateToProps,mapDispatchToProps)(GetGpxFilePage))