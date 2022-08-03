import './Map.css';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'
import usePlacesAutoComplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { useState, useEffect } from 'react';

const Map = ({ location }) => {
  const [center, setCenter] = useState({})
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  getGeocode({ address: location }).then((results) => {
    const { lat, lng } = getLatLng(results[0]);
    setCenter({ lat, lng })
    return { lat, lng }
  });

  // if (!center) return null;

  if (!isLoaded) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: '75vw', height: '50vh' }}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker position={center} />
      </GoogleMap>
      {/* <button onClick={handleAddress}>Click address</button> */}
    </>
  );
}

export default Map;