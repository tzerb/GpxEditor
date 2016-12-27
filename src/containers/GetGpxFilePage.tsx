import * as React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/gpxFileActions';

// import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export interface GetGpxFilePageProps
{
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
            let waypoints = xmlDom.documentElement.getElementsByTagName("wpt")        
            alert(waypoints.length + ' points');
            var xmlData = reader.result;
            alert('calling saveWaypoints');
            saveWaypoints(waypoints)
        };
    }

    //React.EventHandler<React.FormEvent<HTMLInputElement>>
    render() {
        return (<div>
                    <br/>Number of waypoints - {this.props.waypoints.length}<br/>
                    <input type="file" id="the-gpx-file-field" onChange={this.fileChanged}/>
                    <div id="preview" >
                    </div>
                    <div id="data">
                        <h2 id="name"></h2>
                        <p id="size"></p>
                        <p id="type"></p>
                    </div>    
                </div>
        );
    }
}

function mapStateToProps(state:any) {
    //alert('y' + state.waypoints.length);
    return {
        waypoints: state.waypoints
    };
}

function mapDispatchToProps(dispatch:any) {
  return {
    actions: bindActionCreators(actions as any, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetGpxFilePage);




