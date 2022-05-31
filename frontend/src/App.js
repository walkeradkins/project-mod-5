import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import { getListings } from './store/listings'
import Navigation from "./components/Navigation";
import ListingsBrowser from "./components/ListingsBrowser";
import ListingDetails from "./components/ListingDetails";
import ListingForm from "./components/ListingForm";
import UserListings from "./components/UserListings";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const sessionUser = useSelector(state => state.session.user);
  const listings = useSelector(state => state.listings.listings);

  useEffect(() => {
    dispatch(getListings());
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path={'/'}>
            <ListingsBrowser />
          </Route>
          <Route path={'/listings/:id'}>
            <ListingDetails />
          </Route>
          <Route path={'/listings'}>
            <ListingForm />
          </Route>
          <Route path={'/users/:id/listings'}>
            <UserListings listings={listings} />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;