import { createContext, useState, useContext } from 'react';

export const ListingContext = createContext();

export const useListing = () => useContext(ListingContext);

export default function ListingProvider(props) {
  const [selectedListing, setSelectedListing] = useState({});

  return (
  <ListingContext.Provider
    value={{
      selectedListing,
      setSelectedListing
    }}
    >
      {props.children}
    </ListingContext.Provider>
  )
};
