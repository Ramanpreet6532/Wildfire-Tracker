import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker';
import "../App.css"

const Map = ({ center, zoom }) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAG3L5KQ7W0PLQeq4hcR9YzC7LY3t2PsPY' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <LocationMarker lat={center.lat} lng={center.lng} />
            </GoogleMapReact>
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
