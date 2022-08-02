import './Map.css';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api'

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  const center = { lat: 30.2398, lng: -97.7385 }

  if (!isLoaded) {
    return (
      <div>Loading...</div>
    )
  }

  return (
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: '75vw', height: '50vh' }}
      >
      </GoogleMap>
  );
}

export default Map;