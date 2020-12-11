import { useState } from "react"
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker';
import "../App.css"
import LocationInfoBox from './LocationInfoBox';

const API_KEY = process.env.REACT_APP_API_KEY;

const Map = ({ center, zoom, eventData }) => {

    const [locationInfo, setLocationInfo] = useState(null)

    const marker = eventData.map(data => {
        if (data.categories[0].id === 8) {
            return <LocationMarker lat={data.geometries[0].coordinates[1]} lng={data.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: data.id, title: data.title })} />

        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: `${API_KEY}` }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {marker}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
