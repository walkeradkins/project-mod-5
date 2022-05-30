import { createContext, useState, useContext } from 'react';

export const ListingContext = createContext();

export const useListing = () => useContext(ListingContext);

export default function ListingProvider(props) {
  const [listing, setListing] = useState({});

  return (
  <ListingContext.Provider
    value={{
      listing,
      setListing
    }}
    >
      {props.children}
    </ListingContext.Provider>
  )
};
