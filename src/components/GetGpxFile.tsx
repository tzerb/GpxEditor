import * as React from 'react';

// import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export interface GetGpxFileProps
{
}

export interface GetGpxFileState
{
}

export class GetGpxFile extends React.Component<GetGpxFileProps, GetGpxFileState>  {
    
    constructor(props:GetGpxFileProps, context : any)    {
        super(props, context);
        this.fileChanged = this.fileChanged.bind(this);
    }

    fileChanged(ev : React.FormEvent<HTMLInputElement>)
    {
        // 
        //alert('fileChanged' + e.target.files[0].size);
        var reader = new FileReader();
        
        reader.readAsText((ev as any).target.files[0]);
        reader.onloadend = function(){

            let parser = new DOMParser()
            let xmlDom = parser.parseFromString(reader.result, "text/xml");    
            let waypoints = xmlDom.documentElement.getElementsByTagName("wpt")        
            alert(waypoints.length + ' points');
            var xmlData = reader.result;
        };
    }
    //React.EventHandler<React.FormEvent<HTMLInputElement>>
    render() {
        return (<div>
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

export default GetGpxFile;



