
export class track
{

}

export class trackpoint
{

}

export class waypoint
{
    private _name:string;
    get name() : string
    {
        return this._name;
    }

    private _sym:string;
    get sym() : string
    {
        return this._sym;
    }

    private _time:string;
    get time() : string
    {
        return this._time;
    }

    private _lat:string;
    get lat() : string
    {
        return this._lat;
    }

    private _lon:string;
    get lon() : string
    {
        return this._lon;
    }

    constructor()
    {
    }

    fromXmlNode(point:any)
    {
        try {
            this._name = point.getElementsByTagName('name')[0].textContent;
            this._sym = point.getElementsByTagName('sym')[0].textContent;
            this._time = point.getElementsByTagName('time')[0].textContent;

            this._lon = point.getAttribute("lon");
            this._lat = point.getAttribute("lat");
        }
        catch(ex)
        {
            this._name = ex.message;
        }
    }
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
            var wp = new waypoint();
            wp.fromXmlNode(point);

            this._waypoints.push(wp);
        }            
    }
}