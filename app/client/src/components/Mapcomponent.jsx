import React, { useState } from 'react'
import {GoogleMap , LoadScript , Autocomplete , Marker} from '@react-google-maps/api';

function Mapcomponent({onLocationSelected}) {

    const [markerPosition, setMarkerPosition] = useState({ lat: -3.745, lng: -38.523 });
    const handleLocateMe = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const coords = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            setMarkerPosition(coords);
            onLocationSelected(coords);
        });
    };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
    <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        zoom={10}
        center={markerPosition}
        onClick={(e) => setMarkerPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() })}
    >
        <Marker position={markerPosition} />
        <button onClick={handleLocateMe}>Locate Me</button>
    </GoogleMap>
</LoadScript>
  )
}

export default Mapcomponent
