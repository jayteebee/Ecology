import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

// Refactor the MapComponent to accept props
const Maps = ({ lat, lng, zoom = 10 }) => { // Default zoom level is set to 10
  const location = {
    lat,
    lng
  };

  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" // Replace with your API key
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={zoom}
      >
        {/* Marker for the specified location */}
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Maps
