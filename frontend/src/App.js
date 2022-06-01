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

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const sessionUser = useSelector(state => state.session.user);
  const listings = useSelector(state => state.listings.listings);
  const bookings = useSelector(state => state.bookings)

  useEffect(() => {
    dispatch(getListings());
    dispatch(getBookings())
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
            <ListingDetails user={sessionUser}/>
          </Route>
          <Route path={'/listings'}>
            <ListingForm />
          </Route>
          <Route exact path={'/users/:id/listings'}>
            <UserListings listings={listings} user={sessionUser}/>
          </Route>
          <Route exact path={'/users/:id/bookings'}>
            <UserBookings bookings={bookings.bookings} listings={listings} user={sessionUser}/>
          </Route>
          <Route exact path={'/users/:id/bookings/:id'}>
            <BookingDetails bookings={bookings} listings={listings} user={sessionUser}/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;