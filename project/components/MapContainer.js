import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const MapContainer = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY
    })

    const location = {
        address: 'Drinska 1, 21000 Novi Sad, Serbia',
        lat: 45.25371920866877,
        lng: 19.820724158895544,
    }

    const containerStyle = {
        width: '490px',
        height: '490px'
    };

    if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return isLoaded ? (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={16}>
                <MarkerF position={location} />
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        ) : <></>
    }
}

export default MapContainer;