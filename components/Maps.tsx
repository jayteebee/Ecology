import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

interface MapsProps {
    lat: number;
    lng: number;
    zoom?: number; // The question mark makes this property optional
  }

// Refactor the MapComponent to accept props
const Maps: React.FC<MapsProps> = ({ lat, lng, zoom = 10 }) => { // Default zoom level is set to 10
  const location = {
    lat,
    lng
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBEmYwG6cwah68Dgl5bkTMBNVr6nyUebG4" 
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
