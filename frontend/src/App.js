import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import { getListings } from './store/listings'
import { getBookings } from './store/bookings'
import Navigation from "./components/Navigation";
import ListingsBrowser from "./components/ListingsBrowser";
import ListingDetails from "./components/ListingDetails";
import ListingForm from "./components/ListingForm";
import UserListings from "./components/UserListings";
import UserBookings from "./components/UserBookings";
import BookingDetails from "./components/BookingDetails";
import PrivateRoute from "./components/PrivateRoute";
import CitySearch from './components/CitySearch'
import PageNotFound from "./components/PageNotFound";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const sessionUser = useSelector(state => state.session.user);
  const listings = useSelector(state => state.listings);
  const bookings = useSelector(state => state.bookings)

  useEffect(() => {
    dispatch(getListings());
    dispatch(getBookings())
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <PrivateRoute>
          <Switch>
            <Route exact path={'/'}>
              <ListingsBrowser />
            </Route>
            <Route exact path={'/listings/:id'}>
              <ListingDetails user={sessionUser} listings={listings} />
            </Route>
            <Route path={'/listings'}>
              <ListingForm />
            </Route>
            <Route exact path={'/search/:location'}>
              <CitySearch />
            </Route>
            <Route exact path={'/users/:id/listings'}>
              <UserListings listings={listings.listings} user={sessionUser} />
            </Route>
            <Route exact path={'/users/:id/bookings'}>
              <UserBookings user={sessionUser} />
            </Route>
            <Route exact path={'/users/:userId/bookings/:id'}>
              <BookingDetails bookings={bookings} listings={listings} user={sessionUser} />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </PrivateRoute>
      )}
    </>
  );
}

export default App;