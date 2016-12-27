
export class track
{

}

export class trackpoint
{

}

export class waypoint
{
    
}

export class gpxFile
{
    private _waypoints : waypoint[];
    get waypoints() : waypoint[]
    {
        return this._waypoints;
    }

    constructor()
    {

    }

    loadAsXml(gpxFileAsXmlDoc: XMLDocument) 
    {
        let wps = gpxFileAsXmlDoc.documentElement.getElementsByTagName("wpt")    

        this._waypoints = [];
        for(var i = 0; i < wps.length; i++) 
        {
            let point=wps[i];
            let name = point.getElementsByTagName('name')[0];
            this._waypoints.push({name:name.textContent,
                lon: point.getAttribute("lon"),
                lat: point.getAttribute("lat")
            });
        }            
    }
}