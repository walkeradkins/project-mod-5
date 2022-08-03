import './Map.css';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'
import usePlacesAutoComplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { useState, useEffect } from 'react';
import mapStyles from './mapStyles';

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

  const options = {
    styles: mapStyles,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
  }
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
        options={options}
      >
        <Marker
          position={center}
          icon={{
            url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABSdJREFUaEPFWk2IHFUQ/qqdJASiJGBAMKugQlQM6vTEnVn3sOAh7EE3SMQfhCD+XUVBxEtuOQheBBVCQIRAwIgJBiEiSEDd2SF2o8SDigc1huSgLAkibDIzJa9neqZ/Xr1X3bvinEJevar66uer6pcQXD8CwJKA89B6SX1jLKiRNzLyz6Ih+1fTP3tMJcdad8SIiUFxYsgfahzN3pBCWSHEiTrZrjsDJWj2+FdPoSYbmrhSAs37U5eKJfj+GEhgdFnKANBdkHzUxFQjU5UyhAxI3VvVBQ8LeLzVWCO/kF8i6webjmu2n0GA5zCg+8Y9eB7EHyBaOU4OYvbWskVA1QNaxbxnfgc2Xz8OBPvKdww98udY2/Q0/fD16vS8WoCKjJTrAQLLc0tAn7I2h3N3AnwawD0ewL8AeJSi7o9lOQ2YfK/mMuC/bmirDJLD2XmAPgFop3HKgHKnllfBwQGKl78szhlNEItkXonGi6nnVud5MN4DsDk9SwD4UDD3AXqF4u67dQOXjriJTxpFSXxNJzIIrblDYD6k7RG7HL+DO2ZepRMnBpX0ZCqp0r2kRO5d2Iata8cALOUu+6I+ES4IEs5geO0piqMrVZ1R0Gh+dPH97VvRwKcAmgX6nNS9GkeiYCJ9HgN+jL5b+TXV65nRY4auAJnD9iyYToFwi3ytmvuFJv4TTI9T/M1XusZMdyF/8YPDzhNgfAjC1gqYBVEXSF4Dghco6h7zzzzbMlcAwyBC2Hkd4MMAAqfzzuDrMjOWYoDfQrTyJgFDwxoSvYp0bQ6Gdy1uwfbVo2B6dv1Rr6XhY+DaQYqif/KdOM1NGcA4AxyGNwNbTgI87zeti65fz7ilp2kwxNBD0N9P585dtt23AuBmZw+DTxPo9glP5JXWqCSPgtL0ywXlIni4RHEvSodXusKUAPCDnUcQ8CmAtmki5paRnbbnzNncf4ODJbN+OFcJDtu/AXSbP8RmJ0pZQFdCOimb5TQQw58o7t1d7If8MG12Lsk8n3ehvkM1c8v0M8XLu90AWnMHwHx0JMRvAPR+yVzW841CIekhHATjMMB9EL9I3/a+mPojfNTzwkKDzp7tJxDCTtovNcO2vmsUdZ2bufeLzAtAtTtPuKwCmlFKbAD03wOWDGxUxWiRjADIu453G/VmQPJEjVQWNCfBf1JCJZtZSsVn6ONl+r57MYuNZ2d34XpwBITFIuapujLLBXHXrEFCDhQvcxy2x9dls7mTxnCGer0/rGy+d+8MBo3fde+BIw26Jnas094SKmTDZ5CbHTP/Mj93rfn01WMhh02XwWTDrUjL/x8AIavejBZqLwcg/yQ0KjEfnckGLWkw3WKazvFbFwCL3tzLXOkTzjyfNKUmtntJ0Yrz+VMEIJTlBpRQO3kC8qZqjMdqMFNO9TIgv094/eJm+yqIbnSX2nTvp3iFXM+DPgCFPfFKEHW3F20Lq4QdJYcPnQRu2C8CsNCo65HDB6Bg5yOKu0/mX5yznax5lWg9vJt50CXQjolyiUaZLlC87PwY4rBzAcCu0vQtrujAX9g0fCAdionblsi4m3jsMZsJOmy8DeZ9ILrJOmWN8+CXKO6eyZ4X0z1stRfBdMSAKD9jm9cUugrz1NgYviZN9KJ+H5Nu7LmrvtJ/UPXI6AEIKXN/4Wg8rBkTdwlJSiuEI6VS1/9QqOm7y7vaKqtCk9lc8wpqlxk1sbpUqroszH7VV7bOlnuQaXRI/Cb5npV36tcYT5c5nayz1Fw8rQp4zUL+F6okCFY7ouBvAAAAAElFTkSuQmCC',
            scaledSize: new window.google.maps.Size(50, 50),
          }}

        />
      </GoogleMap>
      {/* <button onClick={handleAddress}>Click address</button> */}
    </>
  );
}

export default Map;