
export class track
{

}

export class trackpoint
{

}

// TODO TZ make these more typesafe
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

    static fromLatLong(name: string, lat: string, lon: string) : waypoint
    {
        let wp = new waypoint();
        wp._name = name;
        wp._lon = lon;
        wp._lat = lat;

        return wp;
    }

    static fromXmlNode(point:any) : waypoint
    {
        let wp = new waypoint();
        try {
            wp._name = point.getElementsByTagName('name')[0].textContent;
            wp._sym = point.getElementsByTagName('sym')[0].textContent;
            wp._time = point.getElementsByTagName('time')[0].textContent;

            wp._lon = point.getAttribute("lon");
            wp._lat = point.getAttribute("lat");
        }
        catch(ex)
        {
            wp._name = ex.message;
        }
        return wp;
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
            this._waypoints.push(waypoint.fromXmlNode(point));
        }            
    }
}